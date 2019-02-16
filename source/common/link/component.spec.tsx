import React from 'react';
import { shallow } from 'enzyme';
import { LinkComponent } from './component';

describe('LinkComponent', () => {

    it('should render an anchor', () => {

        expect(shallow(<LinkComponent to='' />).find('a')).toHaveLength(1);
    });

    it('should render children', () => {

        expect(shallow(<LinkComponent to=''><p>Hello</p></LinkComponent>).find('p')).toHaveLength(1);
    });
});