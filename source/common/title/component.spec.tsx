import React from 'react';
import { shallow } from 'enzyme';
import { TitleComponent } from './component';

describe('TitleComponent', () => {

    it('should render an h1', () => {

        expect(shallow(<TitleComponent priority={1} />).find('h1')).toHaveLength(1);
    });

    it('should render children', () => {

        expect(shallow(<TitleComponent priority={1}><span>Hello</span></TitleComponent>).find('span')).toHaveLength(1);
    });
});