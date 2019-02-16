import { StoreType } from '../../helper/store/types';
import { AppRootStoreStateInterface } from '../../app/root-store/state.interface';
import { PortfolioStoreReadyStateEnum } from './ready-state.enum';
import { api } from '../../helper/api';
import { AppConfigurationType } from '../../app/configuration/types';

export const portfolioStoreSubscriber = (
    store: StoreType<AppRootStoreStateInterface>, 
    configuration: AppConfigurationType,
) => {

    const state = store.getState();

    if (state.portfolio.readyState !== PortfolioStoreReadyStateEnum.loaded) {

        store.setState({
            portfolio: {
                ...state.portfolio,
                readyState: PortfolioStoreReadyStateEnum.loading
            }
        });

        api.fetch(`${configuration.apiBaseUrl}/api/portfolio`)
            .then((body) => {
                store.setState({
                    portfolio: {
                        items: body.data,
                        readyState: PortfolioStoreReadyStateEnum.loaded
                    }
                });
            });
    }
};