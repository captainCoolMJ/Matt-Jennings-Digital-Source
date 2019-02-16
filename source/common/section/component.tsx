import React, { FunctionComponent } from 'react';
import styles from './styles.css';

export const SectionComponent: FunctionComponent<{
    id?: string;
}> = (props) => (
    <section id={props.id} className={styles.section}>{props.children}</section>
)