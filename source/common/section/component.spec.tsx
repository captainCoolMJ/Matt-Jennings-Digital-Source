import React from 'react';
import { shallow } from 'enzyme';
import { SectionComponent } from './component';

describe('SectionComponent', () => {

    it('should render a section', () => {

        expect(shallow(<SectionComponent />).find('section')).toHaveLength(1);
    });

    it('should render children', () => {

        expect(shallow(<SectionComponent><p>Hello</p></SectionComponent>).find('p')).toHaveLength(1);
    });
});