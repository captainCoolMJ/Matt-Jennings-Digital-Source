import { TimelineRawEventInterface } from './raw-event.interface';

export const timelineRawEventMock: (data: Partial<TimelineRawEventInterface>) => TimelineRawEventInterface = ({
  from = 'Feb 2019',
  to = 'June 2019',
  action = 'Mocked something',
  category = 'work',
  details = 'Mocked something cool',
}) => ({
  from,
  to,
  action,
  category,
  details,
});
