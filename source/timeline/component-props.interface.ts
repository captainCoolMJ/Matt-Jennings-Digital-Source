import { AppRootStoreInjectedPropsType } from '../app/root-store/types';
import { AppConfigurationInjectPropsType } from '../app/configuration/types';

export interface TimelineComponentPropsInterface extends 
    AppRootStoreInjectedPropsType<'timeline', true>,
    AppConfigurationInjectPropsType {

}