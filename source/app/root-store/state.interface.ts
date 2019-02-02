import { StoreStateType } from '../../helper/store/types';
import { PortfolioStoreStateInterface } from '../../portfolio/store/state.interface';
import { TimelineStoreStateInterface } from '../../timeline/store/state.interface';
import { SkillsStoreStateInterface } from '../../skills/store/state.interface';

export interface AppRootStoreStateInterface extends StoreStateType {
    portfolio: PortfolioStoreStateInterface;
    timeline: TimelineStoreStateInterface;
    skills: SkillsStoreStateInterface;
}