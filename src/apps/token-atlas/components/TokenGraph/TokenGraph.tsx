import { useCallback } from 'react';
import 'chartjs-adapter-date-fns';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    TooltipItem,
    Legend,
    ChartData,
    Filler,
    ScriptableContext,
    Scale,
    ChartOptions,
    ChartArea,
    CoreScaleOptions,
    TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// hooks
import { useAppSelector } from '../../hooks/useReducerHooks';

// types
import { TokenAtlasInfoData, TokenMarketHistory } from '../../../../types/api';
import { PeriodFilter } from '../../types/types';

// components
import Body from '../Typography/Body';
import SkeletonLoader from '../../../../components/SkeletonLoader';

type Scales = {
    [key: string]: Scale<CoreScaleOptions>;
};

ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    TimeScale,
    Filler,
    Tooltip,
    Legend
);

const TokenGraph = () => {
    const tokenDataGraph = useAppSelector(
        (state) => state.tokenAtlas.tokenDataGraph as TokenMarketHistory | undefined
    );
    const tokenDataInfo = useAppSelector(
        (state) => state.tokenAtlas.tokenDataInfo as TokenAtlasInfoData | undefined
    );
    const periodFilter = useAppSelector(
        (state) => state.tokenAtlas.periodFilter as PeriodFilter
    );
    const isGraphLoading = useAppSelector(
        (state) => state.tokenAtlas.isGraphLoading as boolean
    );

    // This gets the right color depending on the price value threshold, a callback is used
    // to make sure this only gets called if tokenDataInfo.price changes, otherwise the graph crashes
    const getGradient = useCallback(
        (ctx: CanvasRenderingContext2D, chartArea: ChartArea, scales: Scales) => {
            const gradientBg = ctx.createLinearGradient(
                0,
                chartArea.top,
                0,
                chartArea.bottom
            );
            const percentage = Math.min(
                Math.max(
                    (scales.y.getPixelForValue(tokenDataInfo?.price || 0) - chartArea.top) / chartArea.height,
                    0
                ),
                1
            );

            // this changes the color of the line depending on a value threshold
            gradientBg.addColorStop(0, '#6CFF00');
            gradientBg.addColorStop(percentage, '#6CFF00');
            gradientBg.addColorStop(percentage, '#FF005C');
            gradientBg.addColorStop(1, '#FF005C');

            return gradientBg;
        },
        [tokenDataInfo?.price]
    );

    // This gets the right graph time scale (x) depending on the periodFilter selected. A callback is used
    // to make sure this only gets called if tokenDataGraph?.price_history changes, otherwise the graph crashes
    const graphXScale = useCallback(
        () => {
            if (tokenDataGraph?.price_history) {
                if (periodFilter === PeriodFilter.HOUR) {
                    return 'minute';
                }

                if (periodFilter === PeriodFilter.DAY) {
                    return 'hour';
                }

                if (periodFilter === PeriodFilter.WEEK) {
                    return 'day';
                }

                if (periodFilter === PeriodFilter.MONTH) {
                    return 'day';
                }

                if (periodFilter === PeriodFilter.YEAR) {
                    return 'month';
                }

                return 'day';
            }
        },
        [tokenDataGraph?.price_history] // eslint-disable-line react-hooks/exhaustive-deps
    );

    if (isGraphLoading) {
        return <SkeletonLoader $height="300px" $radius="6px" />;
    }

    if (!tokenDataGraph?.price_history || !tokenDataGraph.price_history.length) {
        return <Body className="my-4">Price history not found.</Body>;
    }

    const createGradient = (
        context: ScriptableContext<'line'>
    ): CanvasGradient | undefined => {
        const chart = context.chart;
        const { ctx, chartArea, scales } = chart;

        if (!chartArea) return;

        return getGradient(ctx, chartArea, scales);
    };

    // This gives us the right dataset for the graph
    const data: ChartData<'line'> = {
        labels: tokenDataGraph.price_history.map((x) => x.timestamp),
        datasets: [
            {
                label: `${
                    tokenDataInfo?.symbol ? tokenDataInfo?.symbol : 'Token'
                } price`,
                data: tokenDataGraph.price_history.map((price) => price.priceUSD),
                borderColor: (ctx: ScriptableContext<'line'>) => createGradient(ctx),
                tension: 0.4,
                pointRadius: 0,
            }
        ]
    };

    // This draws the price value threshold dotted line
    const horizontalDottedLine = {
        id: 'horizontalDottedLine',
        beforeDatasetDraw(chart: ChartJS) {
            const {
                ctx,
                chartArea: { left, width },
                scales: { y }
            } = chart;
            ctx.save();

            ctx.strokeStyle = 'white';
            ctx.setLineDash([3, 6]);
            ctx.lineWidth = 2;
            ctx.strokeRect(left, y.getPixelForValue(tokenDataInfo?.price || 0), width, 0);
            ctx.restore();
        }
    };

    // The options used to customize the UI of the graph
    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Token price history',
            },
            filler: {
                drawTime: 'beforeDatasetDraw',
                propagate: true,
            },
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem: TooltipItem<'line'>) => {
                        let label = tooltipItem.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += parseFloat(tooltipItem.parsed.y.toString()).toFixed(8);
                        return label;
                    }
                }
            }
        },
        scales: {
            x: {
                offset: false,
                type: 'time',
                time: {
                    unit: graphXScale() || 'day',
                    displayFormats: {
                        minute: 'HH:mm',
                        hour: 'HH:mm',
                        day: 'dd MMM',
                        month: 'MMM y',
                    }
                },
                border: {
                    width: 0,
                },
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false,
                },
                ticks: {
                    font: {
                        weight: 600,
                        size: 9,
                    },
                    stepSize:
                        periodFilter === PeriodFilter.HOUR ||
                        periodFilter === PeriodFilter.DAY ||
                        periodFilter === PeriodFilter.MONTH
                            ? 3
                            : 1,
                    color: '#DDDDDD'
                }
            },
            y: {
                border: {
                    width: 0,
                },
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false,
                },
                position: 'right',
                ticks: {
                    showLabelBackdrop: true,
                    backdropColor: (ctx) =>
                        ctx.tick.value === (tokenDataInfo?.price || 0)
                            ? '#6CFF00'
                            : 'rgba(49, 49, 49, 0.5)',
                    backdropPadding: 3,
                    font: {
                        weight: 600,
                        size: 9,
                    },
                    color: (ctx) =>
                        ctx.tick.value === (tokenDataInfo?.price || 0)
                            ? '#313131'
                            : '#DDDDDD',
                }
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        }
    };

    return (
        <div id='token-atlas-token-graph' className="flex w-[99%] mb-20 h-full max-h-[400px] mobile:mb-0">
            <Line data={data} options={options} plugins={[horizontalDottedLine]} data-testid='price-graph' />
        </div>
    );
};

export default TokenGraph;