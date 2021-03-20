interface BaseSettings {
  maxTradeInput: number;
  minAbsolutePlusThreshold: number;
  minPlusInPercentThreshold: number;
  minRatioThreshold: number;
  tradingEnabled: boolean;
  rollbackAfterMS: number;
}

export enum TradeCombinationType {
  DEFAULT = 'default',
  REVERSE = 'reverse',
}

export interface TradeCombination extends BaseSettings {
  uuid: string;
  symbol1: string;
  symbol2: string;
  symbol3: string;
  type: TradeCombinationType;
}

export interface Exchange extends BaseSettings {
  id: string;
  name: string;
  tradeCombinations: TradeCombination[];
}

export interface Settings {
  maxParallelSimulationWorkers: number;
  tradingEnabled: boolean;
  exchanges: {
    [key: string]: Exchange;
  };
}
