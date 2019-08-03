import { TimelineEvent } from './event';
import { timelineRawEventMock } from './raw-event.mock';
import { dateFormat } from '../common/date/format';

describe('TimelineEvent', () => {
  let event: TimelineEvent = null;

  beforeEach(() => {
    event = new TimelineEvent(
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
    const dateFrom = dateFormat('January 2018');
    const dateTo = dateFormat('June 2018');

    expect(event.start).toEqual(dateFrom);
    expect(event.end).toEqual(dateTo);
    expect(event.duration).toEqual(dateTo.ms - dateFrom.ms);
    expect(event.evt).toEqual('thing');
    expect(event.cat).toEqual('work');
    expect(event.details).toEqual('Mock details');
  });

  it('should format the end date to "now" when the event is set to "present"', () => {
    event = new TimelineEvent(
      timelineRawEventMock({
        from: 'January 2018',
        to: 'present',
        action: 'thing',
        category: 'work',
        details: 'Mock details',
      }),
    );

    const dateTo = dateFormat(new Date().toDateString());

    expect(event.end).toEqual(dateTo);
  });

  it('should create and build the HTML for a timeline event', () => {
    expect(event.build(0, 0).tagName).toBe('DIV');
  });
});
