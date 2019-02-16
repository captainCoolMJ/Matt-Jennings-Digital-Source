import React, { FunctionComponent } from 'react';
import { TitleComponentPropsInterface } from './component-props.interface';
import styles from './styles.css';

const priorityToTagName = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'p'
}

export const TitleComponent: FunctionComponent<TitleComponentPropsInterface> = (props) => {

    let priority = 1;

    priority = Math.max(props.priority, 1);
    priority = Math.min(priority, 5);

    const Tag = priorityToTagName[priority];

    return <Tag className={styles.title}>{props.children}</Tag>
};