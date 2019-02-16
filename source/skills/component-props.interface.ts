import { AppRootStoreInjectedPropsType } from "../app/root-store/types";
import { AppConfigurationInjectPropsType } from "../app/configuration/types";

export interface SkillsComponentPropsInterface extends 
    AppRootStoreInjectedPropsType<'skills', true>,
    AppConfigurationInjectPropsType {

}