module.exports = function(jQuery) {
	'use strict';

	var date = new Date();

	var dateYear = date.getFullYear('yyyy');

	var dateSpan = document.getElementById('date');

	dateSpan.innerHTML = dateYear;

	/* all methods */

	// Add the navigation suggestion
	var toggleNext = function() {
		setTimeout(function() {
			
			//$('.nav-next').fadeToggle(2000);

			jQuery('.timeline-evt').addClass('active');

		}, 1000);
	};

/*	// Sets each div to center of window
	var setVerticalCenters = function(elements) {

		var winHeight = $(window).outerHeight();

		elements.each(function(i, el) {

			var innerHeight = $(el).find('.inner_wrap').outerHeight();
				
			if( winHeight > innerHeight ) {
				$(el).addClass('no_spill');
			} else {
				$(el).removeClass('no_spill');
			}

		});

	};*/

	// Adds a hover class so multiple elements can activate a hover
	var toggleHoverClass = function($selector, $target, className) {

		$selector.hover(function() {
			$target.addClass(className);
		},
		function() {
			$target.removeClass(className);
		});

	};

	var loadTimeline = function loadTimeline(timeline) {

		var formatDate = function formatDate(time) {
			
			var date = new Date(time),
				monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				month = monthNames[date.getMonth()],
				year = date.getFullYear(),
				ms = Date.parse(date);

			// returns days since Jan 1, 1970
			return {
				'ms': ms,
				'formatted' : month + ' ' + year
			};
		};

		var Event = function(event) {
			this.start = formatDate(event.from);
			this.end = event.to.toLowerCase() !== 'present' ? formatDate(event.to) : formatDate(Date.now());
			this.duration = this.end.ms - this.start.ms;
			this.evt = event.action;
			this.cat = event.category;
			this.details = event.details;
			this.$timelinePlot = jQuery('<div class="timeline-evt">');
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

			var $timelineDescription = jQuery('<div class="time-evt-description">'),
				$title = jQuery('<h4 class="plot-title">').text(this.evt),
				$range = jQuery('<p class="plot-date">').text( this.start.formatted + ' - ' + this.end.formatted ),
				$details = jQuery('<p class="plot-details">').text(this.details);

			width = width > 100 ? 100 : width;
			leftPos = leftPos < 0 ? 0 : leftPos;

			this.$timelinePlot.addClass('timeline-'+this.cat);

			$timelineDescription
				.append($title)
				.append($range)
				.append($details);

			/*this.$timelinePlot.css({
				'left': leftPos + '%',
				'width': width + '%',
				'top': 40 * index + 'px'
			});*/

			this.addEventListeners();

			this.$timelinePlot.append($timelineDescription);

			return this.$timelinePlot;

		};

		Event.prototype.addEventListeners = function() {

			this.$timelinePlot.hover(function() {
				jQuery(this).toggleClass('hover');
			});

		};

		var init = function init() {

			var sortedEvents = [],
				sortedEndEvents = [],
				sortedStartEvents = [];

			timeline.forEach(function(timeEvent) {

				var evt = new Event(timeEvent);

				sortedEvents.push(evt);

			});

			sortedEvents.sort(function(a, b) {
				return b.start.ms - a.start.ms;
			});

			var oneYear = 31556925974,
				yearRange = Date.now() - (oneYear * 8);

			var work = sortedEvents.filter(function(event) {
					return event.cat === 'work';
				}),
				life = sortedEvents.filter(function(event) {
					return event.cat === 'life';
				});

			var $workTimeline = jQuery('#timeline-work'),
				$lifeTimeline = jQuery('#timeline-life');

			work.forEach(function(evt, i) {
				$workTimeline.append(evt.build(i, yearRange));
			});

			life.forEach(function(evt, i) {
				$lifeTimeline.append(evt.build(i, yearRange));
			});

		};

		return {
			init: init()
		};

	};

	/*
	* Smooth scrolling main navigation
	***********************************/
	jQuery('a[href*=#]:not([href=#])').click(function(e) {
		if( location.pathname.replace(/^\//,'' ) == this.pathname.replace(/^\//,'') && location.hostname == this.hostname ) {

			var target = jQuery(this.hash);
			target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');

			if( target.length ) {
				jQuery('html,body').stop().animate({
					scrollTop: target.offset().top
				}, 350, 'easeInOutQuart');
				e.preventDefault();
			}

		}
	});

	jQuery(document).ready(function() {

		// Load up the site data
		jQuery.getJSON('data/site.json', function(data){
			//loadWork(data.work);
			loadTimeline(data.timeline);

		});

		// Targets, selector to apply class to, class to apply
		toggleHoverClass(jQuery('.title, .logo'), jQuery('.logo'), 'hover');
		toggleHoverClass(jQuery('header, .main_nav'), jQuery('header'), 'hover');

		toggleNext();

		jQuery('#toggleMenu').on('click', function() {
			
			jQuery('body').addClass('menu-active');

			jQuery('body').one('click', function() {
				jQuery('body').removeClass('menu-active');
			});

			return false;

		});

		var bounds = {
			'left': Math.round(jQuery('.timelines').offset().left),
			'top': Math.round(jQuery('.timelines').offset().top),
			'right': Math.round(jQuery('.timelines').offset().left + jQuery('.timelines').outerWidth()),
			'bottom': Math.round(jQuery('.timelines').offset().top + jQuery('.timelines').outerHeight())
		};

		// should only hover within the bounds of the timeline square

		

		//$('.timelines').on('mousemove', timelineMouseMove);

	});
};