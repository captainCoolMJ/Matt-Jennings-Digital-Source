import { AppRootStoreStateInterface } from '../app/root-store/state.interface';
import { StoreType } from '../helper/store/types';
import { SkillsStoreReadyStateEnum } from './store/ready-state.enum';

export const skillsCreateSuspender = (store: StoreType<AppRootStoreStateInterface>, queue: Array<any>) => {

    let pResolve;

    queue.push(new Promise((resolve, reject) => {
        pResolve = resolve;
    }));

    let oldStatus = store.getState().skills.readyState;

    return (state: AppRootStoreStateInterface) => {

        const newStatus = state.skills.readyState;

        if (oldStatus !== SkillsStoreReadyStateEnum.loaded && newStatus === SkillsStoreReadyStateEnum.loaded) {
            pResolve();
        }

        oldStatus = newStatus;
    };
}