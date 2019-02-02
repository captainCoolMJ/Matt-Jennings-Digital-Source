import React, { Component, ReactNode, ComponentType } from 'react';
import { I18nInjectPropsInterface } from './inject-props.interface';
import { i18nTranslate } from './translate';
import { I18nContext } from './context';
import { i18nMessagesType, i18nMessagesVariablesType } from './types';

export const i18nInject = <P extends I18nInjectPropsInterface>(
    WrappedComponent: ComponentType<P>,
) => class I18nInjectedComponent extends Component<
    Pick<P, Exclude<keyof P, keyof I18nInjectPropsInterface>>
> {

    static contextType = I18nContext;

    public render(): ReactNode {
        return (
            <WrappedComponent
                {...this.props as any}
                translate={(id: keyof i18nMessagesType, variables: i18nMessagesVariablesType) => (
                    i18nTranslate(this.context, id, variables)
                )}
            />
        )
    }
}