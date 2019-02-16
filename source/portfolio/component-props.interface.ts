import { AppRootStoreInjectedPropsType } from '../app/root-store/types';
import { AppConfigurationInjectPropsType } from '../app/configuration/types';

export interface PortfolioComponentPropsInterface extends 
    AppRootStoreInjectedPropsType<'portfolio', true>,
    AppConfigurationInjectPropsType {

}