import { TimelineItemModelInterface } from './model.interface';
import { TimelineItemCategoryEnum } from './category.enum';

export const timelineItemModelMock = (): TimelineItemModelInterface => ({
    from: '',
    to: '',
    action: '',
    category: TimelineItemCategoryEnum.life,
    details: ''
});