import { AppRootStoreStateInterface } from '../../app/root-store/state.interface';
import { SkillsStoreReadyStateEnum } from './ready-state.enum';

export const skillsStoreSuspender = (resolve: () => void, reject: () => void) => (
    state: AppRootStoreStateInterface, 
    prevState: AppRootStoreStateInterface
) => {

    const prevStatus = prevState.skills.readyState;
    const newStatus = state.skills.readyState;

    if (prevStatus !== SkillsStoreReadyStateEnum.loaded && newStatus === SkillsStoreReadyStateEnum.loaded) {
        resolve();
    }
};