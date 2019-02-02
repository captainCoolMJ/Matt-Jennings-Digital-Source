import React, { FunctionComponent } from 'react';
import { SectionComponent } from '../common/section/component';
import { FooterComponent } from '../common/footer/component';
import { HeaderComponent } from '../common/header/component';
import { NavigationComponent } from '../common/navigation/component';
import styles from './styles.css';
import { AppComponentPropsInterface } from './component-props.interface';
import { PortfolioContainer } from '../portfolio/container';
import { TimelineContainer } from '../timeline/container';
import { TitleComponent } from '../common/title/component';
import { TextComponent } from '../common/text/component';
import { LinkComponent } from '../common/link/component';
import { ListComponent } from '../common/list/component';
import { SkillsContainer } from '../skills/container';
import { ContactContainer } from '../contact/container';
import { AppI18nComponent } from './i18n/component';
import { ErrorContainer } from '../error/container';

export const AppComponent: FunctionComponent<AppComponentPropsInterface> = (props) => (
    <div className={styles.app}>
        <HeaderComponent>
            <TitleComponent priority={1}>{props.configuration.sitename}</TitleComponent>
        </HeaderComponent>
        <SectionComponent>
            <TitleComponent priority={1}><AppI18nComponent id='main.title' /></TitleComponent>
            <TextComponent><AppI18nComponent id='main.tagline' /></TextComponent>
        </SectionComponent>

        <SectionComponent>
            <PortfolioContainer />
        </SectionComponent>

        <SectionComponent>
            <TitleComponent priority={1}><AppI18nComponent id='work.title' /></TitleComponent>

            <SkillsContainer />
            <TimelineContainer />
        </SectionComponent>
        <SectionComponent>
            <ContactContainer />
        </SectionComponent>
        <SectionComponent>
            <ErrorContainer />
        </SectionComponent>
        <FooterComponent>
            <TextComponent>&copy; {props.configuration.sitename}</TextComponent>
        </FooterComponent>
        <NavigationComponent>
            <ListComponent>
                <ListComponent.Item>
                    <LinkComponent to='#work' title={props.translate('navigation.workTitle')}>
                        <AppI18nComponent id='navigation.work' />
                    </LinkComponent>
                </ListComponent.Item>
                <ListComponent.Item>
                    <LinkComponent to='#experience' title={props.translate('navigation.experienceTitle')}>
                        <AppI18nComponent id='navigation.experience' />
                    </LinkComponent>
                </ListComponent.Item>
                <ListComponent.Item>
                    <LinkComponent to='#talk' title={props.translate('navigation.contactTitle')}>
                        <AppI18nComponent id='navigation.contact' />
                    </LinkComponent>
                </ListComponent.Item>
            </ListComponent>
        </NavigationComponent>
    </div>
);