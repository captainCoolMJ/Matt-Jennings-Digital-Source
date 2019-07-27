var Event = require('./timeline/event');

var Timeline = function (container) {
    this.container = container;
};

Timeline.prototype.initialize = function (rawEvents) {

    var oneYear = 31556925974,
        yearRange = Date.now() - (oneYear * 8);

    var categoryTimelineElemMap = {
        work: this.container.getElementById('timeline-work'),
        life: this.container.getElementById('timeline-life'),
    };

    rawEvents
        .map(function (timeEvent) {
            return new Event(timeEvent);
        })
        .sort(function (a, b) {
            return b.start.ms - a.start.ms;
        })
        .forEach(function (event, i) {

            var element = event.build(i, yearRange);
            var categoryContainer = categoryTimelineElemMap[event.cat];
            
            if (element && categoryContainer) {
                categoryContainer.appendChild(element);
            }
        });
};

module.exports = Timeline;