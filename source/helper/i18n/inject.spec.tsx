import React, { ComponentType } from 'react';
import { shallow } from 'enzyme';
import { i18nInject } from './inject';

describe('i18nInject', () => {

    it('should wrap a component with intl props', () => {

        let DummyComponent: ComponentType = () => <div />;
        
        DummyComponent = i18nInject(DummyComponent);

        const mounted = shallow(<DummyComponent />);

        expect(mounted.prop('translate')).toBeDefined();
    });
});