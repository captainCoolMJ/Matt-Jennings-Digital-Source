import React, { Component, ReactNode } from 'react';
import { ListComponent } from '../common/list/component';
import { TitleComponent } from '../common/title/component';
import { SkillsComponentPropsInterface } from './component-props.interface';
import { AppI18nComponent } from '../app/i18n/component';
import { TextComponent } from '../common/text/component';
import { SkillsStoreReadyStateEnum } from './store/ready-state.enum';
import { api } from '../helper/api';

export class SkillsComponent extends Component<SkillsComponentPropsInterface> {

    constructor(props: SkillsComponentPropsInterface) {
        super(props);
        
        if (props.skills.readyState !== SkillsStoreReadyStateEnum.loaded) {

            props.setState({
                skills: {
                    ...props.skills,
                    readyState: SkillsStoreReadyStateEnum.loading
                }
            });
    
            api.fetch(`${props.configuration.apiBaseUrl}/api/skills`)
                .then((body) => {
                    props.setState({
                        skills: {
                            items: body.data,
                            readyState: SkillsStoreReadyStateEnum.loaded
                        }
                    });
                });
        }
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