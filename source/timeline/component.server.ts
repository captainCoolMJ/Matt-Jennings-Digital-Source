import { AppInternationalizationType } from '../app/types';
import { TimelineRawEventInterface } from './raw-event.interface';
import { titleComponent } from '../title/component.server';
import { TimelineEvent } from './event.server';

export const timelineComponent = (intl: AppInternationalizationType) => (
  events: Array<TimelineRawEventInterface>,
  options: {
    yearsToShow: number;
  },
) => {
  const earliestVisibleDate = new Date();
  earliestVisibleDate.setFullYear(new Date().getFullYear() - options.yearsToShow);

  const mappedEvents = events
    .map((timeEvent) => new TimelineEvent(intl, timeEvent))
    .filter((timeEvent) => timeEvent.end > earliestVisibleDate)
    .sort((a, b) => b.start.getTime() - a.start.getTime());

  return `
    <div class="timelines cf">
      <div id="timeline-work">
        ${titleComponent({
          priority: 3,
          content: intl.translate('past.sectionWork.title'),
        })}

        ${mappedEvents
          .filter((event) => event.cat === 'work')
          .map((event) => event.renderHTML())
          .join('')}
      </div>
      <div id="timeline-life">
        ${titleComponent({
          priority: 3,
          content: intl.translate('past.sectionLife.title'),
        })}

        ${mappedEvents
          .filter((event) => event.cat === 'life')
          .map((event) => event.renderHTML())
          .join('')}
      </div>
    </div>
  `;
};
