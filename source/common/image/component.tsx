import React, { FunctionComponent } from 'react';
import { ImageComponentPropsInterface } from './component-props.interface';

export const ImageComponent: FunctionComponent<ImageComponentPropsInterface> = (props) => (
    <img src={props.src} />
);