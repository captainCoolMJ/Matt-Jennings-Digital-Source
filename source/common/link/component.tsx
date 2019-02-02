import React, { FunctionComponent } from 'react';
import { LinkComponentPropsInterface } from './component-props.interface';

export const LinkComponent: FunctionComponent<LinkComponentPropsInterface> = (props) => {

    const target = props.open ? '_blank' : '_self';
    
    return (
        <a href={props.to} title={props.title} target={target}>{props.children}</a>
    );
};