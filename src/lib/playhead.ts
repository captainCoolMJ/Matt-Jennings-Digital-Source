import { PlayheadTrackOptionsInterface } from "./playhead/track-options.interface";

/***********
* PLAYHEAD *
************/
export class Playhead {

	constructor () {
		
		setPageOffset.call(this);
		// Global listener to retrieve values
		window.addEventListener('scroll', setPageOffset.bind(this));
		function setPageOffset() {
			this.valX = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body as any).scrollLeft;
			this.valY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body as any).scrollTop;
		}
	}

	public setTrack(options: PlayheadTrackOptionsInterface): void {

		// Setting default options from call
		var inRange = Math.floor(options.range.in),
			outRange = Math.floor(options.range.out),
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
	}

	public setTracks(tracks: Array<PlayheadTrackOptionsInterface>): void {
		
		tracks.forEach(function(track) {
	
			this.setTrack(track);
		});
	}
}