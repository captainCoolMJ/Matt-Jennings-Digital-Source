import React, { FunctionComponent } from 'react';
import styles from './styles.css';

export const NavigationComponent: FunctionComponent = (props) => (
    <nav className={styles.navigation}>{props.children}</nav>
)