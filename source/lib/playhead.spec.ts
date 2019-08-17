import { Playhead } from './playhead';
import { PlayheadTrackOptionsInterface } from './playhead/track-options.interface';

const configMock = ({
  range = {
    in: 0,
    out: 100,
  },
  playIn = jest.fn(),
  playOut = jest.fn(),
  orientation = 'portrait',
  destroy = false,
}: Partial<PlayheadTrackOptionsInterface>): PlayheadTrackOptionsInterface => ({
  range,
  playIn,
  playOut,
  orientation,
  destroy,
});

describe('Playhead', () => {
  let instance: Playhead;

  beforeEach(() => {
    instance = new Playhead();
  });

  it('should add a scroll listener when initialized', () => {
    jest.spyOn(instance as any, 'onScrollWindow');
    const scroll = new CustomEvent('scroll');

    instance.initialize();
    instance.addTrack(configMock({}));

    window.dispatchEvent(scroll);
    expect(instance['onScrollWindow']).toHaveBeenCalledTimes(1);
  });

  it('should not allow a track configuration with invalid ranges', () => {
    const badConfig: PlayheadTrackOptionsInterface = configMock({
      range: {
        in: 100,
        out: 5,
      },
    });
    expect(() => instance.addTrack(badConfig)).toThrowError();
  });

  it('should add tracks', () => {
    instance.addTracks([configMock({})]);
    expect(instance['tracks']).toHaveLength(1);
  });

  it('should call a callback when the page position activates a track', () => {
    const mockTrack: PlayheadTrackOptionsInterface = configMock({});
    instance.addTrack(mockTrack);
    expect(mockTrack.playIn).toHaveBeenCalled();
  });

  it('should call a callback when the page position activates a track', () => {
    const mockTrack: PlayheadTrackOptionsInterface = configMock({
      orientation: 'landscape',
    });

    (window as any).pageXOffset = 10;
    instance.addTrack(mockTrack);
    expect(mockTrack.playIn).toHaveBeenCalled();
  });

  it('should call play in and play out when the page passes the threshold', () => {
    const mockTrack: PlayheadTrackOptionsInterface = configMock({
      range: {
        in: 100,
        out: 200,
      },
    });
    instance.addTrack(mockTrack);

    instance['handleTrackPosition']({ x: 0, y: 101 }, instance['tracks'][0]);
    expect(mockTrack.playIn).toHaveBeenCalledTimes(1);

    instance['handleTrackPosition']({ x: 0, y: 201 }, instance['tracks'][0]);
    expect(mockTrack.playOut).toHaveBeenCalledTimes(1);

    instance['handleTrackPosition']({ x: 0, y: 201 }, instance['tracks'][0]);
    expect(mockTrack.playOut).toHaveBeenCalledTimes(1);
  });

  it('should remove the track when destroy is set to true', () => {
    const mockTrack: PlayheadTrackOptionsInterface = configMock({
      range: {
        in: 0,
        out: 100,
      },
      destroy: true,
    });
    instance.addTrack(mockTrack);
    expect(mockTrack.playIn).toHaveBeenCalledTimes(1);

    instance['handleTrackPosition']({ x: 0, y: 200 }, instance['tracks'][0]);
    expect(mockTrack.playOut).toHaveBeenCalledTimes(1);
    expect(instance['tracks']).toHaveLength(0);
  });
});
