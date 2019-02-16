import React, { FunctionComponent } from 'react';
import { RouterRouteComponentPropsInterface } from './route-component-props.interface';

export const RouterRouteComponent: FunctionComponent<RouterRouteComponentPropsInterface> = (props) => (
    <props.Component />
);