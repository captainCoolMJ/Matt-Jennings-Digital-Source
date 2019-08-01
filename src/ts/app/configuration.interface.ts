export interface AppConfigurationInterface {
  title: string;
  description: string;
  assets: {
    favicon: string;
    css: string;
    cv: string;
  };
  links: {
    email: string;
    github: string;
    linked_in: string;
  };
  keys: {
    gtm: string;
  };
  api: {
    timeline: string;
  };
}
