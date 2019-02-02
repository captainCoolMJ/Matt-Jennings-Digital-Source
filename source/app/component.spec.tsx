import React from 'react';
import { shallow } from 'enzyme';
import { AppComponent } from './component';
import { appConfigurationMock } from './configuration/mock';

describe('AppComponent', () => {

    const props = {
        translate: jest.fn(),
        configuration: appConfigurationMock(),
    };

    it('should render a div', () => {

        expect(shallow(<AppComponent {...props} />).find('div')).toHaveLength(1);
    });
});