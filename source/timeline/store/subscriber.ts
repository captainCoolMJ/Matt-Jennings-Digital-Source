import { StoreType } from '../../helper/store/types';
import { AppRootStoreStateInterface } from '../../app/root-store/state.interface';
import { TimelineStoreReadyStateEnum } from './ready-state.enum';
import { api } from '../../helper/api';
import { AppConfigurationType } from '../../app/configuration/types';

export const timelineStoreSubscriber = (
    store: StoreType<AppRootStoreStateInterface>, 
    configuration: AppConfigurationType,
) => {

    const state = store.getState();

    if (state.timeline.readyState !== TimelineStoreReadyStateEnum.loaded) {

        store.setState({
            timeline: {
                ...state.timeline,
                readyState: TimelineStoreReadyStateEnum.loading
            }
        });

        api.fetch(`${configuration.apiBaseUrl}/api/timeline`)
            .then((body) => {
                store.setState({
                    timeline: {
                        items: body.data,
                        readyState: TimelineStoreReadyStateEnum.loaded
                    }
                });
            });
    }
};