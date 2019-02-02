import React, { FunctionComponent, Fragment } from 'react';
import { I18nContext } from './context';
import { I18nComponentPropsInterface } from './component-props.interface';
import { i18nTranslate } from './translate';

export const I18nComponent: FunctionComponent<I18nComponentPropsInterface> = (props) => (
    <I18nContext.Consumer>
        {(context) => {
            const message = i18nTranslate(context, props.id, props.variables);

            if (props.dangerous === true) {

                return <span dangerouslySetInnerHTML={{
                    __html: message,
                }} />
            }

            return <Fragment>{message}</Fragment>
        }}
    </I18nContext.Consumer>
)