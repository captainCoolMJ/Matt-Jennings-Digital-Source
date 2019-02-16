import { LinkComponentPropsInterface } from '../../common/link/component-props.interface';
import { AppRootStoreInjectedPropsType } from '../../app/root-store/types';

export interface RouterLinkComponentPropsInterface extends 
    LinkComponentPropsInterface,
    AppRootStoreInjectedPropsType<null, true> {

}