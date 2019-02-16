import React, { FunctionComponent } from 'react';
import styles from './styles.css';

export const FooterComponent: FunctionComponent = (props) => (
    <footer className={styles.footer}>{props.children}</footer>
)