import { TimelineItemModelInterface } from '../item/model.interface';
import { TimelineStoreReadyStateEnum } from './ready-state.enum';

export interface TimelineStoreStateInterface {
    readyState: TimelineStoreReadyStateEnum;
    items: Array<TimelineItemModelInterface>;
}