import { TimelineEvent } from './event.server';
import { timelineRawEventMock } from './raw-event.mock';
import { AppInternationalizationServiceMock } from '../app/internationalization.service.mock';

describe('TimelineEvent', () => {
  let event: TimelineEvent = null;

  beforeEach(() => {
    event = new TimelineEvent(
      AppInternationalizationServiceMock(),
      timelineRawEventMock({
        from: 'January 2018',
        to: 'June 2018',
        action: 'thing',
        category: 'work',
        details: 'Mock details',
      }),
    );
  });

  it('should create a timeline event', () => {
    const event = new TimelineEvent(
      AppInternationalizationServiceMock(),
      timelineRawEventMock({
        from: 'January 2018',
        to: 'June 2018',
        action: 'thing',
        category: 'work',
        details: 'Mock details',
      }),
    );

    const from = new Date();
    from.setFullYear(2018);
    from.setMonth(0);

    const to = new Date();
    to.setFullYear(2018);
    to.setMonth(5);

    expect(event.start.getFullYear()).toEqual(from.getFullYear());
    expect(event.start.getMonth()).toEqual(from.getMonth());

    expect(event.end.getFullYear()).toEqual(to.getFullYear());
    expect(event.end.getMonth()).toEqual(to.getMonth());

    expect(event.evt).toEqual('thing');
    expect(event.cat).toEqual('work');
    expect(event.details).toEqual('Mock details');
  });

  it('should format the end date to today when the event is set to "present"', () => {
    event = new TimelineEvent(
      AppInternationalizationServiceMock(),
      timelineRawEventMock({
        from: 'January 2018',
        to: 'present',
        action: 'thing',
        category: 'work',
        details: 'Mock details',
      }),
    );

    const to = new Date();

    expect(event.end.getFullYear()).toEqual(to.getFullYear());
    expect(event.end.getMonth()).toEqual(to.getMonth());
    expect(event.end.getDate()).toEqual(to.getDate());
  });

  it('should create and build the HTML for a timeline event', () => {
    expect(event.renderHTML()).toEqual(expect.any(String));
  });
});
