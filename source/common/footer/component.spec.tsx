import React from 'react';
import { shallow } from 'enzyme';
import { FooterComponent } from './component';

describe('FooterComponent', () => {

    it('should render a footer', () => {

        expect(shallow(<FooterComponent />).find('footer')).toHaveLength(1);
    });

    it('should render children', () => {

        expect(shallow(<FooterComponent><p>Hello</p></FooterComponent>).find('p')).toHaveLength(1);
    });
});