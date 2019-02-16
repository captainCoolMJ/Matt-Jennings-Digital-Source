import { SkillsStoreReadyStateEnum } from './ready-state.enum';

export interface SkillsStoreStateInterface {
    readyState: SkillsStoreReadyStateEnum;
    items: Array<string>
}