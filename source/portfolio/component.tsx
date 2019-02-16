import React, { Component, ReactNode } from 'react';
import { PortfolioComponentPropsInterface } from './component-props.interface';
import { PortfolioItemComponent } from './item/component';
import { TitleComponent } from '../common/title/component';
import { TextComponent } from '../common/text/component';
import { ListComponent } from '../common/list/component';
import { AppI18nComponent } from '../app/i18n/component';

export class PortfolioComponent extends Component<PortfolioComponentPropsInterface> {

    constructor(props) {
        super(props);
        
    }

    public render(): ReactNode {

        return (
            <div>
                <TitleComponent priority={1}><AppI18nComponent id='portfolio.title' /></TitleComponent>
                <TextComponent><AppI18nComponent id='portfolio.disclaimer' /></TextComponent>
                
                <ListComponent>
                    {this.props.portfolio.items.map((item) => (
                        <ListComponent.Item key={item.id}>
                            <PortfolioItemComponent model={item} />
                        </ListComponent.Item>
                    ))}
                </ListComponent>
            </div>
        );
    }
}