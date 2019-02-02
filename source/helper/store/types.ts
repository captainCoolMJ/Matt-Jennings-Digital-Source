import { StoreStateInterface } from './state.interface';

export type StoreStateType = object;

export type StoreSetStateType<T extends StoreStateType> = (newState: Partial<StoreStateInterface<T>>) => void;

export type StoreType<T extends StoreStateType> = {
    setState: StoreSetStateType<T>;
    getState: () => StoreStateInterface<T>;
    subscribe: (cb: (state: StoreStateInterface<T>) => void) => void;
}

export type StoreInjectedPropsType<
    A extends StoreStateType, 
    B extends keyof A, 
    C extends boolean = false,
> = C extends true ?
    Pick<A, B> & {
        setState: StoreSetStateType<A>;
    } :
    Pick<A, B>;