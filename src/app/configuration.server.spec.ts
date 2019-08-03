import { AppConfiguration } from './configuration.server';

describe('AppConfiguration', () => {
  let config: AppConfiguration;

  beforeEach(() => {
    config = new AppConfiguration();
  });

  it('should get and set values', () => {
    config.set({
      title: 'Hello!',
    });

    expect(config.get().title).toEqual('Hello!');
  });

  it('should set values without keeping references to deep objects', () => {
    const obj = {
      email: 'matt@mattjenningsdigital.com',
      github: '',
      linked_in: '',
    };

    config.set({
      links: obj,
    });

    obj.email = 'matt@gmail.com';

    expect(config.get().links.email).toEqual('matt@mattjenningsdigital.com');
  });

  it('should prevent unsafe values from being returned unless explicitly called', () => {
    config.set({
      port: 9000,
    });

    expect((config.get() as any).port).toBe(undefined);

    expect(config.getUnsafe().port).toBe(9000);
  });
});
