import { AppRootStoreStateInterface } from '../app/root-store/state.interface';

export const browserSubscriber = (state: AppRootStoreStateInterface, prevState: AppRootStoreStateInterface) => {

    if (state.router.location.pathname !== prevState.router.location.pathname) {

        history.pushState(null, null, state.router.location.pathname);
    }
}