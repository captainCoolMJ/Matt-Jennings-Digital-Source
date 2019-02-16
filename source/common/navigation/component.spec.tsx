import React from 'react';
import { shallow } from 'enzyme';
import { NavigationComponent } from './component';

describe('NavigationComponent', () => {

    it('should render a nav', () => {

        expect(shallow(<NavigationComponent />).find('nav')).toHaveLength(1);
    });

    it('should render children', () => {

        expect(shallow(<NavigationComponent><p>Hello</p></NavigationComponent>).find('p')).toHaveLength(1);
    });
});