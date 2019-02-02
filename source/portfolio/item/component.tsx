import React, { FunctionComponent } from 'react';
import { PortfolioItemComponentPropsInterface } from './component-props.interface';
import { TextComponent } from '../../common/text/component';
import { TitleComponent } from '../../common/title/component';
import { ImageComponent } from '../../common/image/component';
import { LinkComponent } from '../../common/link/component';
import { ListComponent } from '../../common/list/component';

export const PortfolioItemComponent: FunctionComponent<PortfolioItemComponentPropsInterface> = (props) => (
    <div>
        <TitleComponent priority={4}>{props.model.title}</TitleComponent>
        <TextComponent>{props.model.description}</TextComponent>
        <ListComponent>
            {props.model.tags.map((tag, index) => (
                <ListComponent.Item key={index}>{tag}</ListComponent.Item>
            ))}
        </ListComponent>
        <TextComponent><LinkComponent to={props.model.links.external} open>{props.model.links.external}</LinkComponent></TextComponent>
        <ImageComponent src={props.model.thumbnail} />
        <ImageComponent src={props.model.image} />
    </div>
);