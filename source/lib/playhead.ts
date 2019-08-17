import { PlayheadTrackInterface } from './playhead/track.interface';
import { PlayheadTrackOptionsInterface } from './playhead/track-options.interface';

/***********
 * PLAYHEAD *
 ************/
export class Playhead {
  private tracks: Array<PlayheadTrackInterface> = [];

  public initialize() {
    window.addEventListener('scroll', this.onScrollWindow);
  }

  public addTrack(options: PlayheadTrackOptionsInterface): void {
    // Check to make sure the value is positive
    if (options.range.out <= options.range.in) {
      throw new Error('Range must be a positive value!');
    }

    const track = {
      ...options,
      hasPlayedIn: false,
    };

    this.tracks.push(track);
    this.handleTrackPosition(this.calcWindowPosition(), track);
  }

  public addTracks(tracks: Array<PlayheadTrackOptionsInterface>): void {
    tracks.forEach(this.addTrack.bind(this));
  }

  private calcWindowPosition(): { x: number; y: number } {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset,
    };
  }

  private handleTrackPosition(position: { x: number; y: number }, track: PlayheadTrackInterface): void {
    const scrollPosition = track.orientation === 'landscape' ? position.x : position.y;
    if (!track.hasPlayedIn && scrollPosition >= track.range.in && scrollPosition <= track.range.out) {
      track.playIn();
      track.hasPlayedIn = true;
      return;
    }

    if (track.hasPlayedIn && (scrollPosition > track.range.out || scrollPosition < track.range.in)) {
      track.playOut();
      track.hasPlayedIn = false;

      if (track.destroy) {
        this.tracks = this.tracks.filter((item) => track !== item);
      }
    }
  }

  private onScrollWindow = (): void => {
    this.tracks.forEach((track) => this.handleTrackPosition(this.calcWindowPosition(), track));
  };
}
