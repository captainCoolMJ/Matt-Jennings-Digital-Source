import React from 'react';
import { shallow } from 'enzyme';
import { TimelineComponent } from './component';
import { timelineStoreGetInitialState } from './store/get-initial-state';
import { TitleComponent } from '../common/title/component';
import { appConfigurationMock } from '../app/configuration/mock';

describe('TimelineComponent', () => {

    it('should render three titles', () => {

        const props = {
            timeline: timelineStoreGetInitialState(),
            setState: jest.fn(),
            configuration: appConfigurationMock()
        };

        expect(shallow(<TimelineComponent {...props} />).find(TitleComponent)).toHaveLength(3);
    });
});