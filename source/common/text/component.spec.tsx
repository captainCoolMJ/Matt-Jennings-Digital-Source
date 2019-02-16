import React from 'react';
import { shallow } from 'enzyme';
import { TextComponent } from './component';

describe('TextComponent', () => {

    it('should render a p', () => {

        expect(shallow(<TextComponent />).find('p')).toHaveLength(1);
    });

    it('should render children', () => {

        expect(shallow(<TextComponent><span>Hello</span></TextComponent>).find('span')).toHaveLength(1);
    });
});