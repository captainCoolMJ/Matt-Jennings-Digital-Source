/**************
* PLAYHEAD.JS *
***************/
var Playhead = function () {

	setPageOffset.call(this);
	// Global listener to retrieve values
	window.addEventListener('scroll', setPageOffset.bind(this));
	function setPageOffset() {
		this.valX = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
		this.valY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	}
};

Playhead.prototype.setTrack = function (options) {

	// Setting default options from call
	var inRange = Math.floor(parseInt(options.range.in)),
		outRange = Math.floor(parseInt(options.range.out)),
		playIn = options.playIn,
		playOut = options.playOut,
		orientation = options.orientation,
		destroy = !!options.destroy,
		scrollVal = 0;

	// Trigger to make sure functions only fire once
	var hasTriggered = false;

	// Check to make sure the value is positive
	if( outRange <= inRange ) {
		console.error('Range must be a positive value!');
	}

	handleRanges.call(this);

	// Adding scroll listener
	window.addEventListener('scroll', handleRanges.bind(this), false);

	function handleRanges() {

		// Determines which value to receive
		scrollVal = orientation === 'landscape' ? this.valX : this.valY;

		if( scrollVal >= inRange && scrollVal <= outRange ) {

			if( !hasTriggered ) {
			
				playIn();

			}

			// Ensure playIn only calls once
			hasTriggered = true;

		} else if( scrollVal > outRange || scrollVal < inRange ) {

			if( hasTriggered ) {

				// Prevent another call
				if( destroy ) {
					window.removeEventListener('scroll', handleRanges);
				}
			
				playOut();
			
			}

			// Reset playIn
			hasTriggered = false;

		} else {
			return false;
		}

	}
};

Playhead.prototype.setTracks = function (tracks, globalOptions) {
	
	tracks.forEach(function(track) {

		if( globalOptions !== 'undefined' ) {

			for( var prop in globalOptions ) {
				track[prop] = globalOptions[prop]; 
			}

		}

		setTrack(track);

	});
};

module.exports = Playhead;