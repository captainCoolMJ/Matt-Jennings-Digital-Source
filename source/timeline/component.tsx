import React, { Component, ReactNode } from 'react';
import { TimelineComponentPropsInterface } from './component-props.interface';
import { TitleComponent } from '../common/title/component';
import { TimelineItemComponent } from './item/component';
import { TimelineItemCategoryEnum } from './item/category.enum';
import { ListComponent } from '../common/list/component';
import { AppI18nComponent } from '../app/i18n/component';

export class TimelineComponent extends Component<TimelineComponentPropsInterface> {

    constructor(props) {
        super(props);

    }

    public render(): ReactNode {
        return (
            <div>
                <TitleComponent priority={2}><AppI18nComponent id='timeline.title' /></TitleComponent>
        
                <TitleComponent priority={3}><AppI18nComponent id='timeline.subtitleWork' /></TitleComponent>
        
                <ListComponent>
                    {this.props.timeline.items
                        .filter((item) => item.category === TimelineItemCategoryEnum.work)
                        .map((item, index) => (
                            <ListComponent.Item key={index}><TimelineItemComponent model={item} /></ListComponent.Item>
                        ))
                    }
                </ListComponent>
        
                <TitleComponent priority={3}><AppI18nComponent id='timeline.subtitleLife' /></TitleComponent>
        
                <ListComponent>
                    {this.props.timeline.items
                        .filter((item) => item.category === TimelineItemCategoryEnum.life)
                        .map((item, index) => (
                            <ListComponent.Item key={index}><TimelineItemComponent model={item} /></ListComponent.Item>
                        ))
                    }
                </ListComponent>
            </div>
        );
    }
}