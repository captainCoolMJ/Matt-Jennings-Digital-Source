import { storeInject } from '../helper/store/inject';
import { AppRootStoreStateInterface } from '../app/root-store/state.interface';
import { SkillsComponent } from './component';

export const SkillsContainer = storeInject((state: AppRootStoreStateInterface) => ({
    skills: state.skills,
}))(SkillsComponent);