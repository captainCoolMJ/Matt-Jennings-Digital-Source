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
    linkedIn: string;
  };
  keys: {
    gtm: string;
  };
}
