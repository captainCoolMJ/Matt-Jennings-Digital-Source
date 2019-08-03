import { AppConfigurationUnsafeInterface } from './configuration-unsafe.interface';
import { appConfigMock } from './config.mock';

export const appConfigUnsafeMock = (): AppConfigurationUnsafeInterface => ({
  ...appConfigMock(),
  port: 8080,
  scripts: {},
});
