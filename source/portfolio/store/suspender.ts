import { AppRootStoreStateInterface } from '../../app/root-store/state.interface';
import { PortfolioStoreReadyStateEnum } from './ready-state.enum';

export const portfolioStoreSuspender = (resolve: () => void, reject: () => void) => (
    state: AppRootStoreStateInterface, 
    prevState: AppRootStoreStateInterface
) => {

    const prevStatus = prevState.portfolio.readyState;
    const newStatus = state.portfolio.readyState;

    if (prevStatus !== PortfolioStoreReadyStateEnum.loaded && newStatus === PortfolioStoreReadyStateEnum.loaded) {
        resolve();
    }
};