import React, { FunctionComponent } from 'react';
import { TitleComponent } from '../common/title/component';
import { TextComponent } from '../common/text/component';
import { LinkComponent } from '../common/link/component';
import { renderToString } from 'react-dom/server';
import { AppI18nComponent } from '../app/i18n/component';
import { ErrorComponentPropsInterface } from './component-props.interface';

export const ErrorComponent: FunctionComponent<ErrorComponentPropsInterface> = (props) => (
    <div>
        <TitleComponent priority={1}><AppI18nComponent id='error.title' /></TitleComponent>

        <TextComponent>
            <AppI18nComponent id='error.messageNotFound' variables={{
                link: renderToString(
                    <LinkComponent to='/' title={props.translate('error.messageBackLinkTitle')}>
                        <AppI18nComponent id='error.messageBackLink' />
                    </LinkComponent>
                ),
            }} dangerous />
        </TextComponent>
    </div>
);