import React, { FunctionComponent } from 'react';
import { ListComponent } from '../common/list/component';
import { TitleComponent } from '../common/title/component';
import { SkillsComponentProps } from './component-props.interface';
import { AppI18nComponent } from '../app/i18n/component';

export const SkillsComponent: FunctionComponent<SkillsComponentProps> = (props) => (
    <div>
        <TitleComponent priority={2}><AppI18nComponent id='skills.title' /></TitleComponent>

        <ListComponent>
            {props.skills.items.map((item, index) => (
                <ListComponent.Item key={index}>{item}</ListComponent.Item>
            ))}
        </ListComponent>
    </div>
);