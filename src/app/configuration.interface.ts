export interface AppConfigurationInterface {
  title: string;
  description: string;
  assets: Record<string, string>;
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
