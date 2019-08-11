export interface PlayheadTrackOptionsInterface {
  playIn: () => void;
  playOut: () => void;
  destroy: boolean;
  orientation?: 'portrait' | 'landscape';
  range: {
    in: number;
    out: number;
  };
}
