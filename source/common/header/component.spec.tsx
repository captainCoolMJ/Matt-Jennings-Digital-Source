import React from 'react';
import { shallow } from 'enzyme';
import { HeaderComponent } from './component';

describe('HeaderComponent', () => {

    it('should render a header', () => {

        expect(shallow(<HeaderComponent />).find('header')).toHaveLength(1);
    });

    it('should render children', () => {

        expect(shallow(<HeaderComponent><p>Hello</p></HeaderComponent>).find('p')).toHaveLength(1);
    });
});