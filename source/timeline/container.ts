import { storeInject } from '../helper/store/inject';
import { TimelineComponent } from './component';
import { AppRootStoreStateInterface } from '../app/root-store/state.interface';
import { configurationInject } from '../helper/configuration/inject';

export const TimelineContainer = storeInject((state: AppRootStoreStateInterface) => ({
    timeline: state.timeline,
}), true)(configurationInject(TimelineComponent) as any);