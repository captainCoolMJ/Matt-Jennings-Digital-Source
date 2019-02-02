import { EventEmitter } from 'events';
import { StoreStateInterface } from './state.interface';
import { StoreType, StoreStateType } from './types';

export const storeCreate = <T extends StoreStateType>(state: StoreStateInterface<T> = {}): StoreType<T> => {

    const emitter = new EventEmitter();

    return {
        setState: (newState) => {
            Object.assign(state, newState);
            emitter.emit('setState', state);
        },
        getState: () => state,
        subscribe: (cb: (state: StoreStateInterface<T>) => void) => {

            emitter.addListener('setState', cb);

            return () => {
                emitter.removeListener('setState', cb);
            };
        }
    };
};