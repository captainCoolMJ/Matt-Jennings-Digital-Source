import { AppRootStoreStateInterface } from './state.interface';
import { portfolioStoreGetInitialState } from '../../portfolio/store/get-initial-state';
import { timelineStoreGetInitialState } from '../../timeline/store/get-initial-state';
import { skillsStoreGetInitialState } from '../../skills/store/get-initial-state';
import { routerStoreGetInitialState } from '../../router/store/get-initial-state';

export const appRootStoreGetInitialState = (): AppRootStoreStateInterface => ({
    portfolio: portfolioStoreGetInitialState(),
    timeline: timelineStoreGetInitialState(),
    skills: skillsStoreGetInitialState(),
    router: routerStoreGetInitialState(),
});