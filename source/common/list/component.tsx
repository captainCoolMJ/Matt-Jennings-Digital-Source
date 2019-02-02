import React, { ReactNode, Component } from 'react';
import { ListItemComponent } from './item-component';

export class ListComponent extends Component {

    public static Item: typeof ListItemComponent = ListItemComponent;

    public render(): ReactNode {

        return <ul>{this.props.children}</ul>
    }
}