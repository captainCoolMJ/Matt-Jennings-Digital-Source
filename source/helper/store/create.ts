import { EventEmitter } from 'events';
import { StoreType, StoreStateType } from './types';

export const storeCreate = <T extends StoreStateType>(state: T): StoreType<T> => {

    const emitter = new EventEmitter();

    return {
        setState: (newState) => {
            Object.assign(state, newState);
            emitter.emit('setState', state);
        },
        getState: () => state,
        subscribe: (cb: (state: T) => void) => {

            emitter.addListener('setState', cb);

            return () => {
                emitter.removeListener('setState', cb);
            };
        }
    };
};