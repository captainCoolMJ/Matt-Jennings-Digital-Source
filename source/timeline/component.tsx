import React, { FunctionComponent } from 'react';
import { TimelineComponentPropsInterface } from './component-props.interface';
import { TitleComponent } from '../common/title/component';
import { TimelineItemComponent } from './item/component';
import { TimelineItemCategoryEnum } from './item/category.enum';
import { ListComponent } from '../common/list/component';
import { AppI18nComponent } from '../app/i18n/component';

export const TimelineComponent: FunctionComponent<TimelineComponentPropsInterface> = (props) => (
    <div>

        <TitleComponent priority={2}><AppI18nComponent id='timeline.title' /></TitleComponent>

        <TitleComponent priority={3}><AppI18nComponent id='timeline.subtitleWork' />}</TitleComponent>

        <ListComponent>
            {props.timeline.items
                .filter((item) => item.category === TimelineItemCategoryEnum.work)
                .map((item, index) => (
                    <ListComponent.Item key={index}><TimelineItemComponent model={item} /></ListComponent.Item>
                ))
            }
        </ListComponent>

        <TitleComponent priority={3}><AppI18nComponent id='timeline.subtitleLife' /></TitleComponent>

        <ListComponent>
            {props.timeline.items
                .filter((item) => item.category === TimelineItemCategoryEnum.life)
                .map((item, index) => (
                    <ListComponent.Item key={index}><TimelineItemComponent model={item} /></ListComponent.Item>
                ))
            }
        </ListComponent>
    </div>
);