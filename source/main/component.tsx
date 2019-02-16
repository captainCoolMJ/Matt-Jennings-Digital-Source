import React, { FunctionComponent } from 'react';
import { SectionComponent } from '../common/section/component';
import { TitleComponent } from '../common/title/component';
import { AppI18nComponent } from '../app/i18n/component';
import { TextComponent } from '../common/text/component';
import { PortfolioContainer } from '../portfolio/container';
import { SkillsContainer } from '../skills/container';
import { TimelineContainer } from '../timeline/container';
import { ContactContainer } from '../contact/container';

export const MainComponent: FunctionComponent = () => (
    <>
        <SectionComponent id='top'>
            <TitleComponent priority={1}><AppI18nComponent id='main.title' /></TitleComponent>
            <TextComponent><AppI18nComponent id='main.tagline' /></TextComponent>
        </SectionComponent>

        <SectionComponent id='work'>
            <PortfolioContainer />
        </SectionComponent>

        <SectionComponent id='experience'>
            <TitleComponent priority={1}><AppI18nComponent id='work.title' /></TitleComponent>
            <SkillsContainer />
            <TimelineContainer />
        </SectionComponent>
        <SectionComponent id='contact'>
            <ContactContainer />
        </SectionComponent>
    </>
);