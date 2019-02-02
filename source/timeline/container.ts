import { storeInject } from '../helper/store/inject';
import { TimelineComponent } from './component';
import { AppRootStoreStateInterface } from '../app/root-store/state.interface';

export const TimelineContainer = storeInject((state: AppRootStoreStateInterface) => ({
    timeline: state.timeline,
}))(TimelineComponent);