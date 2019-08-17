import { dateFormat } from '../common/date/format';
import { TimelineRawEventInterface } from './raw-event.interface';

export class TimelineEvent {
  public start: ReturnType<typeof dateFormat>;

  public end: ReturnType<typeof dateFormat>;

  public duration: number;

  public cat: string;

  public evt: string;

  public details: string;

  constructor(event: TimelineRawEventInterface) {
    this.start = dateFormat(event.from);
    this.end = event.to.toLowerCase() !== 'present' ? dateFormat(event.to) : dateFormat(new Date().toDateString());
    this.duration = this.end.ms - this.start.ms;
    this.evt = event.action;
    this.cat = event.category;
    this.details = event.details;
  }

  public build(index: number, startDate: number): HTMLElement {
    if (this.end.ms < startDate) {
      return null;
    }

    if (dateFormat(new Date().toDateString()).ms === this.end.ms) {
      this.end.formatted = 'Present';
    }

    const timelinePlotElement = document.createElement('div');

    timelinePlotElement.classList.add('timeline-evt', `timeline-${this.cat}`);
    timelinePlotElement.innerHTML = `
      <div class="time-evt-description">
        <h4 class="plot-title">${this.evt}</h4>
        <p class="plot-date">${this.start.formatted} - ${this.end.formatted}</p>
        <p class="plot-details">${this.details}</p>
      </div>
    `;

    return timelinePlotElement;
  }
}
