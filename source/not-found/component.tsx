import React, { FunctionComponent } from 'react';
import { SectionComponent } from '../common/section/component';
import { ErrorContainer } from '../error/container';

export const NotFoundComponent: FunctionComponent = () => (
    <SectionComponent>
        <ErrorContainer />
    </SectionComponent>
);