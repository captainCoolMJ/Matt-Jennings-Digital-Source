import { timelineComponent } from './component.server';
import { AppInternationalizationServiceMock } from '../app/internationalization.service.mock';
import { timelineRawEventMock } from './raw-event.mock';

describe('timelineComponent', () => {
  it('should sort and render the timeline', () => {
    const component = timelineComponent(AppInternationalizationServiceMock())(
      [
        timelineRawEventMock({
          from: 'Feb 2018',
          category: 'life',
        }),
        timelineRawEventMock({
          to: 'Feb 2019',
          category: 'work',
        }),
      ],
      {
        yearsToShow: 100,
      },
    );

    const container = document.createElement('div');
    container.innerHTML = component;

    expect(container.querySelectorAll('.timeline-work').length).toBe(1);
    expect(container.querySelectorAll('.timeline-life').length).toBe(1);
  });
});
