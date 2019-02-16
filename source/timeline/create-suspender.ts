import { AppRootStoreStateInterface } from '../app/root-store/state.interface';
import { StoreType } from '../helper/store/types';
import { TimelineStoreReadyStateEnum } from './store/ready-state.enum';

export const timelineCreateSuspender = (store: StoreType<AppRootStoreStateInterface>, queue: Array<any>) => {

    let pResolve;

    queue.push(new Promise((resolve, reject) => {
        pResolve = resolve;
    }));

    let oldStatus = store.getState().timeline.readyState;

    return (state: AppRootStoreStateInterface) => {

        const newStatus = state.timeline.readyState;

        if (oldStatus !== TimelineStoreReadyStateEnum.loaded && newStatus === TimelineStoreReadyStateEnum.loaded) {
            pResolve();
        }

        oldStatus = newStatus;
    };
}