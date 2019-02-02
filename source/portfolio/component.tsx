import React, { FunctionComponent } from 'react';
import { PortfolioComponentPropsInterface } from './component-props.interface';
import { PortfolioItemComponent } from './item/component';
import { TitleComponent } from '../common/title/component';
import { TextComponent } from '../common/text/component';
import { ListComponent } from '../common/list/component';
import { AppI18nComponent } from '../app/i18n/component';

export const PortfolioComponent: FunctionComponent<PortfolioComponentPropsInterface> = (props) => (
    <div>
        <TitleComponent priority={1}><AppI18nComponent id='portfolio.title' /></TitleComponent>
        <TextComponent><AppI18nComponent id='portfolio.disclaimer' /></TextComponent>
        
        <ListComponent>
            {props.portfolio.items.map((item) => (
                <ListComponent.Item key={item.id}>
                    <PortfolioItemComponent model={item} />
                </ListComponent.Item>
            ))}
        </ListComponent>
    </div>
);