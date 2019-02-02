import React from 'react';
import { shallow } from 'enzyme';
import { TimelineItemComponent } from './component';
import { timelineItemModelMock } from './model-mock';
import { TextComponent } from '../../common/text/component';

describe('TimelineItemComponent', () => {

    it('should render text', () => {

        expect(shallow(
            <TimelineItemComponent model={timelineItemModelMock()} />
        ).find(TextComponent)).toHaveLength(1);
    });
});