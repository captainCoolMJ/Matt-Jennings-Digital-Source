import { TimelineItemCategoryEnum } from './category.enum';

export interface TimelineItemModelInterface {
    from: string;
    to: string;
    action: string;
    category: TimelineItemCategoryEnum;
    details: string;
}