import { storeInject } from '../../helper/store/inject';
import { RouterLinkComponent } from './component';

export const RouterLinkContainer = storeInject(undefined, true)(RouterLinkComponent);