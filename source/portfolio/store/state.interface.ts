import { StoreStateType } from '../../helper/store/types';
import { PortfolioItemModelInterface } from '../item/model.interface';
import { PortfolioStoreReadyStateEnum } from './ready-state.enum';

export interface PortfolioStoreStateInterface extends StoreStateType {
    items: Array<PortfolioItemModelInterface>;
    readyState: PortfolioStoreReadyStateEnum;
}