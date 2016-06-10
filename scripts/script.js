(function(jQuery) {
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

			$('.timeline-evt').addClass('active');

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
				$(this).toggleClass('hover');
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

			var $workTimeline = $('#timeline-work'),
				$lifeTimeline = $('#timeline-life');

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
	$('a[href*=#]:not([href=#])').click(function(e) {
		if( location.pathname.replace(/^\//,'' ) == this.pathname.replace(/^\//,'') && location.hostname == this.hostname ) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			if( target.length ) {
				$('html,body').stop().animate({
					scrollTop: target.offset().top
				}, 350, 'easeInOutQuart');
				e.preventDefault();
			}

		}
	});

	/* Form validation */
	function checkValid(fieldVal) {

		if( fieldVal.value.length > 0 ) {

			if( fieldVal.fieldName === 'email' ) {
				
				var email = fieldVal.value,
					invalidChars = " /:,;",
					badChar,
					atPos,
					periodPos;

				// Check for invalid characters
				for (var i=0; i<invalidChars.length; i++) {
					
					badChar = invalidChars.charAt(i);

					if (email.indexOf(badChar,0) > -1) {
						return false;
					}

				}
				
				// Check for first @ symbol
				atPos = email.indexOf("@",1);
				
				if (atPos == -1) {
					return false;
				}	

				// Check for only one "@" symbol
				if (email.indexOf("@",atPos+1) != -1) {
					return false;
				}

				// Make sure there's a period after the @
				periodPos = email.indexOf(".",atPos);
				if (periodPos == -1) {
					return false;
				}

				// Ensure at least two characters after "."
				if (periodPos+3 > email.length)	{
					return false;
				}

				// If all the above pass correctly
				fieldVal.valid = true;


			} else {

				fieldVal.valid = true;

			}

		} else {

			fieldVal.valid = false;

		}

	}

	// Form processing
	function processForm() {

		var formFieldArr = [],
			$errorList = $('<ul>'),
			formHeight = $('.form-contact').css('height'),
			$loaderDiv = $('<div class="loaderDiv">').css({
				'height': formHeight
			});

		$('.form-contact').css('height', formHeight).append($loaderDiv);

		// For each required field, create object and add to the field array
		$('.form-contact .form-required').each(function(i, field){

			var fieldObj = {
				'fieldName': $(field).attr('name'),
				'text': $(field).attr('id').replace('form-', ''),
				'value': $(field).val(),
				'valid': false
			};

			formFieldArr.push(fieldObj);

		});

		// Validate all required fields
		formFieldArr.map(checkValid);

		// Filter out the correct fields
		var invalidFields = formFieldArr.filter(function(field){
			return field.valid === false;
		});

		// If there are any errors
		if( invalidFields.length ) {

			$('.form-contact').css('height', 'auto');
			$loaderDiv.remove();

			invalidFields.forEach(function(field){

				var $errorLi = $('<li>'),
					errVal = field.text.toLowerCase(),
					errStr = 'Please enter valid ' + errVal;

				$errorLi.text(errStr);
				$errorList.append($errorLi);

			});

			$('.form-error').html($errorList);

		} else {

			// All fields are valid, prepare data string for form request
			var dataPrepArr = formFieldArr.map(function(field){
				var str = encodeURIComponent(field.fieldName)+'='+encodeURIComponent(field.value);
				return str;
			});

			var preppedDataStr = dataPrepArr.join('&');

			// Disable editing form
			$('.form-contact input, .form-contact textarea').attr('disabled', true);

			$('.form-error').text('');

			$.ajax({
				type : "POST",
				data : preppedDataStr,
				dataType : 'json',
				url: "scripts/sendmail.php",
				success: function(data) {
					
					$('.form-contact').html('<p>' + data.msg + '</p>');
					$('.form-text').remove();

				},
				error: function(err) {

					$('.form-contact').html('<p>There has been an error. Please <a href="mailto:matt@mattjenningsdigital.com" title="Send us an email">send me an email</a> instead.</p><p>' + err.status + ': ' + err.statusText + '</p>');
					$('.form-text').remove();

				},
				complete: function() {

					$loaderDiv.remove();
					$('.form-contact input, .form-contact textarea').attr('disabled', false);

				}
			});

		}

	}

	/*$(window).load(function() {
			
		setTimeout(function() {

			setVerticalCenters($('.sct'));

		}, 200);

	});*/

	$(document).ready(function() {

		// Load up the site data
		$.getJSON('data/site.json', function(data){
			//loadWork(data.work);
			loadTimeline(data.timeline);

		});

		// Targets, selector to apply class to, class to apply
		toggleHoverClass($('.title, .logo'), $('.logo'), 'hover');
		toggleHoverClass($('header, .main_nav'), $('header'), 'hover');

		toggleNext();

		$('#toggleMenu').on('click', function() {
			
			$('body').addClass('menu-active');

			$('body').one('click', function() {
				$('body').removeClass('menu-active');
			});

			return false;

		});

		var bounds = {
			'left': Math.round($('.timelines').offset().left),
			'top': Math.round($('.timelines').offset().top),
			'right': Math.round($('.timelines').offset().left + $('.timelines').outerWidth()),
			'bottom': Math.round($('.timelines').offset().top + $('.timelines').outerHeight())
		};

		// contact form
		$('.form-contact .form-submit').click(function(e){

			e.preventDefault();

			processForm();

		});

		// should only hover within the bounds of the timeline square

		

		//$('.timelines').on('mousemove', timelineMouseMove);

	});

}($));