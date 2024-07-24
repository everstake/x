import { useEffect, useRef, useState } from 'react';
import Fuse from 'fuse.js';

// reducer
import { setSearchTokenResult } from '../../reducer/theExchangeSlice';
// hooks
import { useAppDispatch, useAppSelector } from '../../hooks/useReducerHooks';

// types
import { Token } from '@etherspot/prime-sdk/dist/sdk/data';
import { ChainType } from '../../utils/types';

// images
import SearchIcon from '../../images/search-icon.png';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isShrinked?: boolean;
}

const TextInput = ({ isShrinked, className, ...props }: TextInputProps) => {
    const dispatch = useAppDispatch();
    const isSwapOpen = useAppSelector((state) => state.swap.isSwapOpen as boolean);
    const swapTokenData = useAppSelector((state) => state.swap.swapTokenData as Token[]);
    const receiveTokenData = useAppSelector((state) => state.swap.receiveTokenData as Token[]);
    const swapChain = useAppSelector((state) => state.swap.swapChain as ChainType);
    const receiveChain = useAppSelector((state) => state.swap.receiveChain as ChainType);

    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState<string>('');

    const handleClickIcon = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    useEffect(() => {
        searchTokens(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [swapChain, receiveChain]);

    // The performSearch will look for tokens close to the name or chain id being typed on filtered or all supported chains
    const searchTokens = (tokenSearch: string) => {
        const options = {
            includeScore: true,
            // Search in `chainId` and in `name`
            keys: ['chainId', 'name'],
        };
        const fuse = new Fuse((isSwapOpen ? swapTokenData : receiveTokenData), options);
        const result = fuse.search(tokenSearch);

        if ((isSwapOpen && swapChain.chainId === 0) || (!isSwapOpen && receiveChain.chainId === 0)) {
            dispatch(setSearchTokenResult(result.map((tokens) => tokens.item)))
        } else {
            dispatch(setSearchTokenResult(result.filter((tokens) => tokens.item.chainId === (isSwapOpen ? swapChain.chainId : receiveChain.chainId)).map((tokens) => tokens.item)))
        }
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;
        setValue(searchValue);
        searchTokens(searchValue);
    };

    return (
        <div className={`${className} ${!isShrinked && 'w-full'} relative h-[34px]`}>
            {!isShrinked ? (
                <>
                    <input
                        {...props}
                        ref={inputRef}
                        className={`w-full h-full rounded-[3px] p-2 pr-9 bg-white focus:outline-none focus:ring-0 font-normal text-black text-md placeholder-[#717171] ${className}`}
                        onChange={handleSearch}
                        value={value}
                    />
                    <span
                        className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                        onClick={handleClickIcon}
                    >
                        <img src={SearchIcon} />
                    </span>
                </>
            ) : (
                <div
                    className="flex h-full w-9 rounded-[3px] p-2 bg-white items-center justify-center cursor-pointer"
                    onClick={handleClickIcon}
                >
                    <img src={SearchIcon} />
                </div>
            )}
        </div>
    );
};

export default TextInput;
