import { AppConfigurationInterface } from './configuration.interface';

export interface AppConfigurationUnsafeInterface extends AppConfigurationInterface {
  port: number;
  scripts: Record<string, string>;
}
