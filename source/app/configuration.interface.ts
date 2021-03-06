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
    base: string;
    endpoints: {
      timeline: string;
      config: string;
      skills: string;
      portfolio: string;
    };
  };
}
