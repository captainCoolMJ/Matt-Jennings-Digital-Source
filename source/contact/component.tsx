import React, { FunctionComponent } from 'react';
import { TitleComponent } from '../common/title/component';
import { TextComponent } from '../common/text/component';
import { LinkComponent } from '../common/link/component';
import { ListComponent } from '../common/list/component';
import { ContactComponentPropsInterface } from './component-props.interface';
import { AppI18nComponent } from '../app/i18n/component';

export const ContactComponent: FunctionComponent<ContactComponentPropsInterface> = (props) => (
    <div>
        <TitleComponent priority={1}><AppI18nComponent id='contact.title' /></TitleComponent>
  
        <TextComponent><AppI18nComponent id='contact.tagline' /></TextComponent>

        <ListComponent>
            <ListComponent.Item>
                <TextComponent>
                    <LinkComponent 
                        to={`mailto:${props.configuration.links.email}?subject=${props.translate('contact.optionEmailSubject')}`}
                        title={props.translate('contact.optionEmailTitle')}
                    >
                        <AppI18nComponent id='contact.optionEmail' />
                    </LinkComponent>
                </TextComponent>
            </ListComponent.Item>
            <ListComponent.Item>
                <TextComponent>
                    <LinkComponent 
                        open 
                        to={props.configuration.links.github} 
                        title={props.translate('contact.optionGithubTitle')
                    }>
                        <AppI18nComponent id='contact.optionGithub' />
                    </LinkComponent>
                </TextComponent>
            </ListComponent.Item>
            <ListComponent.Item>
                <TextComponent>
                    <LinkComponent 
                        open 
                        to={props.configuration.links.linked_in}
                        title={props.translate('contact.optionLinkedInTitle')
                    }>
                        <AppI18nComponent id='contact.optionLinkedIn' />
                    </LinkComponent>
                </TextComponent>
            </ListComponent.Item>
        </ListComponent>
    </div>
);