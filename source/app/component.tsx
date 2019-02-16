import React, { FunctionComponent } from 'react';
import { FooterComponent } from '../common/footer/component';
import { HeaderComponent } from '../common/header/component';
import { NavigationComponent } from '../common/navigation/component';
import styles from './styles.css';
import { AppComponentPropsInterface } from './component-props.interface';
import { TitleComponent } from '../common/title/component';
import { TextComponent } from '../common/text/component';
import { ListComponent } from '../common/list/component';
import { AppI18nComponent } from './i18n/component';
import { RouterComponent } from '../router/component';
import { MainComponent } from '../main/component';
import { NotFoundComponent } from '../not-found/component';
import { RouterContainer } from '../router/container';
import { RouterLinkContainer } from '../router/link/container';

export const AppComponent: FunctionComponent<AppComponentPropsInterface> = (props) => (
    <div className={styles.app}>
        <HeaderComponent>
            <TitleComponent priority={1}>{props.configuration.sitename}</TitleComponent>
        </HeaderComponent>

        <RouterContainer>
            <RouterComponent.Route pathname='/' Component={MainComponent} />
            <RouterComponent.Route pathname='/work' Component={MainComponent} />
            <RouterComponent.Route pathname='/experience' Component={MainComponent} />
            <RouterComponent.Route pathname='/talk' Component={MainComponent} />
            <RouterComponent.Route Component={NotFoundComponent} />
        </RouterContainer>

        <FooterComponent>
            <TextComponent>&copy; {props.configuration.sitename}</TextComponent>
        </FooterComponent>
        <NavigationComponent>
            <ListComponent>
                <ListComponent.Item>
                    <TextComponent>
                        <RouterLinkContainer to='/work' title={props.translate('navigation.workTitle')}>
                            <AppI18nComponent id='navigation.work' />
                        </RouterLinkContainer>
                    </TextComponent>
                </ListComponent.Item>
                <ListComponent.Item>
                    <TextComponent>
                        <RouterLinkContainer to='/experience' title={props.translate('navigation.experienceTitle')}>
                            <AppI18nComponent id='navigation.experience' />
                        </RouterLinkContainer>
                    </TextComponent>
                </ListComponent.Item>
                <ListComponent.Item>
                    <TextComponent>
                        <RouterLinkContainer to='/talk' title={props.translate('navigation.contactTitle')}>
                            <AppI18nComponent id='navigation.contact' />
                        </RouterLinkContainer>
                    </TextComponent>
                </ListComponent.Item>
            </ListComponent>
        </NavigationComponent>
    </div>
);