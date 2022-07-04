export interface IGasPrice {
  system?: string;
  network?: string;
  unit?: string;
  maxPrice?: number;
  currentBlockNumber?: number;
  msSinceLastBlock?: number;
  blockPrices?: IBlockPrice[];
  estimatedBaseFees?: IBaseFee[];
}

interface IBaseFee {
  [key: string]: Array<number>;
}

interface IBlockPrice {
  blockNumber?: number;
  estimatedTransactionCount?: number;
  baseFeePerGas?: number;
  estimatedPrices?: Array<string>;
}
