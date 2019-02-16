import { storeInject } from '../helper/store/inject';
import { AppRootStoreStateInterface } from '../app/root-store/state.interface';
import { PortfolioComponent } from './component';
import { configurationInject } from '../helper/configuration/inject';

export const PortfolioContainer = storeInject((state: AppRootStoreStateInterface) => ({
    portfolio: state.portfolio
}), true)(configurationInject(PortfolioComponent) as any);