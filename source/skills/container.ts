import { storeInject } from '../helper/store/inject';
import { AppRootStoreStateInterface } from '../app/root-store/state.interface';
import { SkillsComponent } from './component';
import { configurationInject } from '../helper/configuration/inject';

export const SkillsContainer = storeInject((state: AppRootStoreStateInterface) => ({
    skills: state.skills
}), true)(configurationInject(SkillsComponent) as any);