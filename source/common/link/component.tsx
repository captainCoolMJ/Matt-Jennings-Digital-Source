import React, { FunctionComponent } from 'react';
import { LinkComponentPropsInterface } from './component-props.interface';
import styles from './styles.css';

export const LinkComponent: FunctionComponent<LinkComponentPropsInterface> = (props) => (
    <a 
        className={styles.link}
        href={props.to} 
        title={props.title} 
        target={props.open ? '_blank' : '_self'}
    >
        {props.children}
    </a>
);