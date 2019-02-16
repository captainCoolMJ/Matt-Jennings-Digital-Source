import React, { Component, ReactNode } from 'react';
import { ListComponent } from '../common/list/component';
import { TitleComponent } from '../common/title/component';
import { SkillsComponentPropsInterface } from './component-props.interface';
import { AppI18nComponent } from '../app/i18n/component';
import { TextComponent } from '../common/text/component';

export class SkillsComponent extends Component<SkillsComponentPropsInterface> {

    constructor(props) {
        super(props);

    }
    
    public render(): ReactNode {
        return (
            <div>
                <TitleComponent priority={2}><AppI18nComponent id='skills.title' /></TitleComponent>
        
                <ListComponent>
                    {this.props.skills.items.map((item, index) => (
                        <ListComponent.Item key={index}><TextComponent>{item}</TextComponent></ListComponent.Item>
                    ))}
                </ListComponent>
            </div>
        );
    }
}