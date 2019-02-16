import React from 'react';
import { shallow } from 'enzyme';
import { ListItemComponent } from './item-component';

describe('ListItemComponent', () => {

    it('should render a li', () => {

        expect(shallow(<ListItemComponent />).find('li')).toHaveLength(1);
    });

    it('should render children', () => {

        expect(shallow(<ListItemComponent><p>Hello</p></ListItemComponent>).find('p')).toHaveLength(1);
    });
});