import { PortfolioStoreStateInterface } from './state.interface';

export const portfolioStoreGetInitialState = (): PortfolioStoreStateInterface => ({
    items: [],
    readyState: null
});