import { UIComponent } from './helper/ui/component';
import { TimelineRawEventInterface } from './timeline/raw-event.interface';
import { TimelineEvent } from './timeline/event';

export class Timeline extends UIComponent {
    public initialize(rawEvents: Array<TimelineRawEventInterface>): void {

        const oneYear = 31556925974,
            yearRange = Date.now() - (oneYear * 8);
    
        const categoryTimelineElemMap: Record<string, HTMLElement> = {
            work: this.container.getElementById('timeline-work'),
            life: this.container.getElementById('timeline-life'),
        };
    
        rawEvents
            .map((timeEvent) => new TimelineEvent(timeEvent))
            .sort((a, b) => b.start.ms - a.start.ms)
            .forEach((event, i) => {
    
                const element = event.build(i, yearRange);
                const categoryContainer = categoryTimelineElemMap[event.cat];
                
                if (element && categoryContainer) {
                    categoryContainer.appendChild(element);
                }
            });

    }
}