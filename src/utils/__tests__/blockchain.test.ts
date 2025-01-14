import { gnosis, polygon } from 'viem/chains';
import { getNativeAssetForChainId } from '../blockchain';

describe('getNativeAssetForChainId', () => {
  it('returns Matic for polygon', () => {
    const asset = getNativeAssetForChainId(polygon.id);
    expect(asset.name).toBe('Matic');
    expect(asset.symbol).toBe('MATIC');
  });

  it('returns XDAI for Gnosis', () => {
    const asset = getNativeAssetForChainId(gnosis.id);
    expect(asset.name).toBe('XDAI');
    expect(asset.symbol).toBe('XDAI');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
