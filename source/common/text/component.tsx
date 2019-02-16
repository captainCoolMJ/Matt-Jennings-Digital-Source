import React, { FunctionComponent } from 'react';
import styles from './styles.css';

export const TextComponent: FunctionComponent = (props) => (
    <p className={styles.text}>{props.children}</p>
);