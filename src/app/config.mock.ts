import { AppConfigurationInterface } from './configuration.interface';

export const appConfigMock = (): AppConfigurationInterface => ({
  title: 'Site',
  description: 'Description',
  links: {
    email: '',
    github: '',
    linked_in: '',
  },
  assets: {},
  keys: {
    gtm: '',
  },
  api: {
    timeline: '',
  },
});
