import React, { FunctionComponent } from 'react';
import { I18nComponent } from '../../helper/i18n/component';
import { I18nComponentPropsInterface } from '../../helper/i18n/component-props.interface';
import { AppI18nMessageType } from './types';

export const AppI18nComponent: FunctionComponent<I18nComponentPropsInterface<AppI18nMessageType>> = (props) => (
    <I18nComponent {...props as any} />
);