import React, { Component, ReactNode, ComponentType } from 'react';
import { ConfigurationInjectPropsInterface } from './inject-props.interface';
import { ConfigurationContext } from './context';

export const configurationInject = <P extends ConfigurationInjectPropsInterface>(
    WrappedComponent: ComponentType<P>,
) => class ConfigurationInjectedComponent extends Component<
    Pick<P, Exclude<keyof P, keyof ConfigurationInjectPropsInterface>>
> {

    static contextType = ConfigurationContext;

    public render(): ReactNode {
        return (
            <WrappedComponent
                {...this.props as any}
                configuration={this.context}
            />
        )
    }
}