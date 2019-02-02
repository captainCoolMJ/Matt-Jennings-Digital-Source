import React, { FunctionComponent } from 'react';
import { TimelineItemComponentPropsInterface } from './component-props.interface';
import { TextComponent } from '../../common/text/component';

export const TimelineItemComponent: FunctionComponent<TimelineItemComponentPropsInterface> = (props) => (
    <div>
        <TextComponent>{props.model.details}</TextComponent>
    </div>
);