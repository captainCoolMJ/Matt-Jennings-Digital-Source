import React, { Component, ComponentType, ReactNode } from 'react';
import { StoreContext } from './context';
import { StoreInjectedPropsType, StoreStateType } from './types';

export const storeInject = <A extends StoreStateType, C extends boolean>(
    state: (state: A) => Partial<A> = () => ({}),
    includeSetState?: C,
) => <P extends StoreInjectedPropsType<A, B, C>, B extends keyof A>(
    WrappedComponent: ComponentType<P>,
) => class StoreInjectedComponent extends Component<Pick<P, Exclude<keyof P, keyof StoreInjectedPropsType<A, B, C>>>> {

    static contextType = StoreContext;

    private storeSubscriber = null;

    public state = state(this.context.getState());

    public componentDidMount(): void {

        this.setState(state(this.context.getState()));

        this.storeSubscriber = this.context.subscribe((newState) => {

            this.setState(state(newState));
        });
    }

    public componentWillUnmount(): void {

        this.storeSubscriber();
    }

    public render(): ReactNode {

        return (
            <WrappedComponent
                {...this.props as any}
                {...this.state}
                setState={includeSetState ? this.context.setState : undefined}
            />
        )
    }
}