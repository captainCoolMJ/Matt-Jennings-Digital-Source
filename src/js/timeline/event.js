var $ = require('jquery');
var formatDate = require('../helper/date/format');

var Event = function(event) {
    this.start = formatDate(event.from);
    this.end = event.to.toLowerCase() !== 'present' ? formatDate(event.to) : formatDate(Date.now());
    this.duration = this.end.ms - this.start.ms;
    this.evt = event.action;
    this.cat = event.category;
    this.details = event.details;
    this.$timelinePlot = $('<div class="timeline-evt">');
};

Event.prototype.build = function(index, startDate) {

    if( this.end.ms < startDate ) {
        return false;
    }

    var range = Date.now() - startDate,
        width = Math.round(( this.duration / range ) * 100),
        leftPos = Math.round(((this.start.ms - startDate) / range) * 100);

    if( formatDate(Date.now()).ms === this.end.ms ) {
        this.end.formatted = 'Present';
    }

    var $timelineDescription = $('<div class="time-evt-description">'),
        $title = $('<h4 class="plot-title">').text(this.evt),
        $range = $('<p class="plot-date">').text( this.start.formatted + ' - ' + this.end.formatted ),
        $details = $('<p class="plot-details">').text(this.details);

    width = width > 100 ? 100 : width;
    leftPos = leftPos < 0 ? 0 : leftPos;

    this.$timelinePlot.addClass('timeline-'+this.cat);

    $timelineDescription
        .append($title)
        .append($range)
        .append($details);

    this.addEventListeners();

    this.$timelinePlot.append($timelineDescription);

    return this.$timelinePlot[0];

};

Event.prototype.addEventListeners = function() {

    this.$timelinePlot.hover(function() {
        $(this).toggleClass('hover');
    });

};

module.exports = Event;