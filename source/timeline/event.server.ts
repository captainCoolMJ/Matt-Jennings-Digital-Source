import { TimelineRawEventInterface } from './raw-event.interface';
import { AppInternationalizationType } from '../app/types';

export class TimelineEvent {
  public start: Date;

  public end: Date;

  public cat: string;

  public evt: string;

  public details: string;

  private isPresent: boolean;

  constructor(private intl: AppInternationalizationType, event: TimelineRawEventInterface) {
    this.isPresent = event.to.toLowerCase() === 'present';

    this.start = new Date(event.from);
    this.end = this.isPresent ? new Date() : new Date(event.to);
    this.evt = event.action;
    this.cat = event.category;
    this.details = event.details;
  }

  public renderHTML(): string {
    const dateFormatOptions = {
      month: 'short',
      year: 'numeric',
    };

    const rangeStart = this.intl.formatDate(this.start, dateFormatOptions);
    const rangeEnd = this.isPresent
      ? this.intl.translate('past.timeline.now')
      : this.intl.formatDate(this.end, dateFormatOptions);

    return `
      <div class="timeline-evt timeline-${this.cat}">
        <div class="time-evt-description">
          <h4 class="plot-title">${this.evt}</h4>
          <p class="plot-date">${rangeStart} &mdash; ${rangeEnd}</p>
          <p class="plot-details">${this.details}</p>
        </div>
      </div>
    `;
  }
}
