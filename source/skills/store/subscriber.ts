import { StoreType } from '../../helper/store/types';
import { AppRootStoreStateInterface } from '../../app/root-store/state.interface';
import { SkillsStoreReadyStateEnum } from './ready-state.enum';
import { api } from '../../helper/api';
import { AppConfigurationType } from '../../app/configuration/types';

export const skillsStoreSubscriber = (
    store: StoreType<AppRootStoreStateInterface>, 
    configuration: AppConfigurationType,
) => {

    const state = store.getState();

    if (state.skills.readyState !== SkillsStoreReadyStateEnum.loaded) {

        store.setState({
            skills: {
                ...state.skills,
                readyState: SkillsStoreReadyStateEnum.loading
            }
        });

        api.fetch(`${configuration.apiBaseUrl}/api/skills`)
            .then((body) => {
                store.setState({
                    skills: {
                        items: body.data,
                        readyState: SkillsStoreReadyStateEnum.loaded
                    }
                });
            });
    }
};