import { createContext } from 'react';
import { storeCreate } from './create';

export const StoreContext = createContext(storeCreate(null));