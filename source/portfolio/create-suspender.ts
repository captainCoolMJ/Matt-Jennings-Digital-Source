import { AppRootStoreStateInterface } from '../app/root-store/state.interface';
import { StoreType } from '../helper/store/types';
import { PortfolioStoreReadyStateEnum } from './store/ready-state.enum';

export const portfolioCreateSuspender = (store: StoreType<AppRootStoreStateInterface>, queue: Array<any>) => {

    let pResolve;

    queue.push(new Promise((resolve, reject) => {
        pResolve = resolve;
    }));

    let oldStatus = store.getState().portfolio.readyState;

    return (state: AppRootStoreStateInterface) => {

        const newStatus = state.portfolio.readyState;

        if (oldStatus !== PortfolioStoreReadyStateEnum.loaded && newStatus === PortfolioStoreReadyStateEnum.loaded) {
            pResolve();
        }

        oldStatus = newStatus;
    };
}