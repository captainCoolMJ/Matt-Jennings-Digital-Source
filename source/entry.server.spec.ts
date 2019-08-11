import { entry } from './entry.server';

describe('entry', () => {
  it('should run the server', () => {
    expect(
      entry({
        assets: {},
        assetsPath: '/',
        databaseSecret: '',
        databaseUrl: '',
        gtmKey: '',
        port: '',
      }),
    ).toBeUndefined();
  });
});
