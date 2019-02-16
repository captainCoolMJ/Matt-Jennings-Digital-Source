import React from 'react';
import { shallow } from 'enzyme';
import { PortfolioItemComponent } from './component';
import { portfolioItemModelMock } from './model-mock';
import { TitleComponent } from '../../common/title/component';

describe('PortfolioItemComponent', () => {

    it('should render a title', () => {

        expect(shallow(
            <PortfolioItemComponent model={portfolioItemModelMock()} />
        ).find(TitleComponent)).toHaveLength(1);
    });
});