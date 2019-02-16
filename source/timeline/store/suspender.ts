import { AppRootStoreStateInterface } from '../../app/root-store/state.interface';
import { TimelineStoreReadyStateEnum } from './ready-state.enum';

export const timelineStoreSuspender = (resolve: () => void, reject: () => void) => (
    state: AppRootStoreStateInterface,
    prevState: AppRootStoreStateInterface
) => {

    const prevStatus = prevState.timeline.readyState;
    const newStatus = state.timeline.readyState;

    if (prevStatus !== TimelineStoreReadyStateEnum.loaded && newStatus === TimelineStoreReadyStateEnum.loaded) {
        resolve();
    }
};