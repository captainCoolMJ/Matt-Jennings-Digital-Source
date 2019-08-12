import { AppConfigurationUnsafeInterface } from './configuration-unsafe.interface';
import { appConfigurationMock } from './configuration.mock';

export const appConfigurationUnsafeMock = (): AppConfigurationUnsafeInterface => ({
  ...appConfigurationMock(),
  port: 8080,
  scripts: {},
});
