import { StoreStateType } from '../../helper/store/types';
import { PortfolioItemModelInterface } from '../item/model.interface';

export interface PortfolioStoreStateInterface extends StoreStateType {
    items: Array<PortfolioItemModelInterface>;
}