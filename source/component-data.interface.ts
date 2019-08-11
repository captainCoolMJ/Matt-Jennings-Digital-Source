import { AppConfigurationUnsafeInterface } from './app/configuration-unsafe.interface';
import { AppConfigurationInterface } from './app/configuration.interface';

export interface ComponentDataInterface {
  config: AppConfigurationUnsafeInterface;
  site: AppConfigurationInterface;
}
