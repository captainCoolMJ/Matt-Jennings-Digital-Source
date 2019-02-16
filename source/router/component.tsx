import { Component, ReactNode, Children, ReactElement } from 'react';
import { RouterRouteComponent } from './route-component';
import { RouterRouteComponentPropsInterface } from './route-component-props.interface';
import { RouterComponentPropsInterface } from './component-props.interface';

export class RouterComponent extends Component<RouterComponentPropsInterface> {

    public static Route = RouterRouteComponent;

    public render (): ReactNode {

        const children = Children.toArray(this.props.children);

        return children.find((child: ReactElement<RouterRouteComponentPropsInterface>, index) => (
            child.props.pathname === this.props.router.location.pathname || index === children.length - 1
        ));
    }
}