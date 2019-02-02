import React, { FunctionComponent } from 'react';
import styles from './styles.css';

export const SectionComponent: FunctionComponent = (props) => (
    <section className={styles.section}>{props.children}</section>
)