import { AppConfigurationInterface } from './configuration.interface';

export const appConfigurationMock = (): AppConfigurationInterface => ({
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
    base: '',
    endpoints: {
      timeline: '',
      skills: '',
      portfolio: '',
      config: '',
    },
  },
});
