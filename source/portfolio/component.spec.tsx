import React from 'react';
import { shallow } from 'enzyme';
import { PortfolioComponent } from './component';
import { portfolioStoreGetInitialState } from './store/get-initial-state';
import { TitleComponent } from '../common/title/component';

describe('PortfolioComponent', () => {

    const props = {
        translate: jest.fn(),
        portfolio: portfolioStoreGetInitialState(),
    };

    it('should render a title', () => {

        expect(shallow(<PortfolioComponent {...props}/>).find(TitleComponent)).toHaveLength(1);
    });
});