import React from 'react';
import { shallow } from 'enzyme';
import { ErrorComponent } from './component';
import { TitleComponent } from '../common/title/component';

describe('ErrorComponent', () => {

    const intl = {
        translate: jest.fn(),
    };

    it('should render a title', () => {

        expect(shallow(<ErrorComponent {...intl}/>).find(TitleComponent)).toHaveLength(1);
    });
});