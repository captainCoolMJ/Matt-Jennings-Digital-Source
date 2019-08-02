import { AppConfigurationInterface } from './configuration.interface';
import { AppConfigurationUnsafeInterface } from './configuration-unsafe.interface';

export class AppConfiguration {
  private readonly unsafeKeys: Array<keyof AppConfigurationUnsafeInterface> = ['port', 'scripts'];

  private config: AppConfigurationUnsafeInterface = {
    port: null,
    title: '',
    description: '',
    assets: {
      favicon: '',
      css: '',
      cv: '',
    },
    links: {
      email: '',
      github: '',
      linked_in: '',
    },
    keys: {
      gtm: '',
    },
    api: {
      timeline: '',
    },
    scripts: {},
  };

  set(value: Partial<AppConfigurationUnsafeInterface>): void {
    this.config = {
      ...this.config,
      ...JSON.parse(JSON.stringify(value)),
    };
  }

  get(): AppConfigurationInterface {
    return (Object.keys(this.config) as Array<keyof AppConfigurationInterface>)
      .filter((key: keyof AppConfigurationUnsafeInterface) => this.unsafeKeys.indexOf(key) === -1)
      .reduce(
        (acc, key) => ({
          ...acc,
          [key]: this.config[key],
        }),
        {} as AppConfigurationInterface,
      );
  }

  getUnsafe(): AppConfigurationUnsafeInterface {
    return this.config;
  }
}
