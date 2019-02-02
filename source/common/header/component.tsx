import React, { FunctionComponent } from 'react';
import styles from './styles.css';

export const HeaderComponent: FunctionComponent = (props) => (
    <header className={styles.header}>{props.children}</header>
)