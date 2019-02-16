import React from 'react';
import { shallow } from 'enzyme';
import { ListComponent } from './component';

describe('ListComponent', () => {

    it('should render a ul', () => {

        expect(shallow(<ListComponent />).find('ul')).toHaveLength(1);
    });

    it('should render children', () => {

        expect(shallow(
            <ListComponent>
                <ListComponent.Item>Hello</ListComponent.Item>
            </ListComponent>).find(ListComponent.Item)).toHaveLength(1);
    });
});