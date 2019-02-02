import React from 'react';
import { shallow } from 'enzyme';
import { ImageComponent } from './component';

describe('ImageComponent', () => {

    it('should render an img', () => {

        expect(shallow(<ImageComponent src='' />).find('img')).toHaveLength(1);
    });
});