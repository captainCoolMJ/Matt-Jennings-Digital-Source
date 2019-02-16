import { storeInject } from '../helper/store/inject';
import { RouterComponent } from './component';
import { AppRootStoreStateInterface } from '../app/root-store/state.interface';

export const RouterContainer = storeInject((state: AppRootStoreStateInterface) => ({
    router: state.router
}))(RouterComponent as any);