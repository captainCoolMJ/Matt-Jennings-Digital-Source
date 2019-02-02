import React from 'react';
import { shallow } from 'enzyme';
import { ContactComponent } from './component';
import { appConfigurationMock } from '../app/configuration/mock';
import { TitleComponent } from '../common/title/component';

describe('ContactComponent', () => {

    const intl = {
        translate: jest.fn(),
    };

    it('should have a title', () => {

        expect(shallow(<ContactComponent 
            configuration={appConfigurationMock()} 
            {...intl}
        />).find(TitleComponent)).toHaveLength(1);
    });
});