import { storeInject } from '../helper/store/inject';
import { AppRootStoreStateInterface } from '../app/root-store/state.interface';
import { PortfolioComponent } from './component';

export const PortfolioContainer = storeInject((state: AppRootStoreStateInterface) => ({
    portfolio: state.portfolio,
}))(PortfolioComponent);