import React, { Component, ReactNode } from 'react';
import { LinkComponent } from '../../common/link/component';
import { RouterLinkComponentPropsInterface } from './component-props.interface';

export class RouterLinkComponent extends Component<RouterLinkComponentPropsInterface> {

    public render(): ReactNode {
        return <LinkComponent {...this.props} onClick={this.onClickLink} />
    }

    private onClickLink = (e) => {
        e.preventDefault();

        this.props.setState({
            router: {
                location: {
                    pathname: this.props.to
                }
            }
        });
    }
} 