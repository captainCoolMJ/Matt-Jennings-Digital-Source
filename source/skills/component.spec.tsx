import React from 'react';
import { shallow } from 'enzyme';
import { SkillsComponent } from './component';
import { skillsStoreGetInitialState } from './store/get-initial-state';
import { TitleComponent } from '../common/title/component';

describe('SkillsComponent', () => {

    it('should render a title', () => {

        const props = {
            skills: skillsStoreGetInitialState()
        };

        expect(shallow(<SkillsComponent {...props} />).find(TitleComponent)).toHaveLength(1);
    });
});