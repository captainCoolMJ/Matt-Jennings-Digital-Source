import { TimelineUIComponent } from './ui-component';
import { timelineRawEventMock } from './raw-event.mock';

describe('TimelineUIComponent', () => {
  it('should initialize all events', () => {
    const container = document.createElement('div');

    container.innerHTML = `
      <div id="timeline-work"></div>
      <div id="timeline-life"></div>
    `;

    const timeline = new TimelineUIComponent(container);

    timeline.initialize([
      timelineRawEventMock({
        from: 'Feb 2018',
        category: 'life',
      }),
      timelineRawEventMock({
        to: 'Feb 2019',
        category: 'work',
      }),
    ]);

    expect(container.querySelector('#timeline-work').children.length).toBe(1);
    expect(container.querySelector('#timeline-life').children.length).toBe(1);
  });
});
