import $ from 'jquery';
import { dateFormat } from '../helper/date/format';
import { TimelineRawEventInterface } from './raw-event.interface';

export class TimelineEvent {
  public start: ReturnType<typeof dateFormat>;

  public end: ReturnType<typeof dateFormat>;

  public duration: number;

  public cat: string;

  public evt: string;

  public details: string;

  private $timelinePlot: JQuery<HTMLElement> = $('<div class="timeline-evt">');

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

    const range = Date.now() - startDate;

    let width = Math.round((this.duration / range) * 100),
      leftPos = Math.round(((this.start.ms - startDate) / range) * 100);

    if (dateFormat(new Date().toDateString()).ms === this.end.ms) {
      this.end.formatted = 'Present';
    }

    const $timelineDescription = $('<div class="time-evt-description">'),
      $title = $('<h4 class="plot-title">').text(this.evt),
      $range = $('<p class="plot-date">').text(this.start.formatted + ' - ' + this.end.formatted),
      $details = $('<p class="plot-details">').text(this.details);

    width = width > 100 ? 100 : width;
    leftPos = leftPos < 0 ? 0 : leftPos;

    this.$timelinePlot.addClass('timeline-' + this.cat);

    $timelineDescription
      .append($title)
      .append($range)
      .append($details);

    this.addEventListeners();

    this.$timelinePlot.append($timelineDescription);

    return this.$timelinePlot[0];
  }

  private addEventListeners(): void {
    this.$timelinePlot.hover(() => {
      $(this).toggleClass('hover');
    });
  }
}
