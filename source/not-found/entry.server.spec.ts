import { notFoundEntry } from './entry.server';
import { AppConfiguration } from '../app/configuration.server';
import { appConfigurationMock } from '../app/configuration.mock';
import { Api } from '../common/api';
import { AppConfigurationInterface } from '../app/configuration.interface';

describe('notFoundEntry', () => {
  let appConfig: AppConfiguration;
  let appApi: Api;
  let configMock: AppConfigurationInterface;

  beforeEach(() => {
    appConfig = new AppConfiguration();
    configMock = appConfigurationMock();
    appConfig.set(configMock);
  });

  it('should successfully to render the page', async () => {
    appApi = {
      fetch: jest.fn().mockResolvedValueOnce(configMock),
    } as any;

    const entry = notFoundEntry(appConfig, appApi);

    const resSendSpy = jest.fn();
    const resTypeSpy = jest.fn();
    const resStatusSpy = jest.fn();

    const resSpy = {
      type: resTypeSpy,
      send: resSendSpy,
      status: resStatusSpy,
    };

    await entry(jest.fn() as any, resSpy as any, jest.fn());

    expect(appApi.fetch).toHaveBeenCalledTimes(1);
    expect(appApi.fetch).toHaveBeenCalledWith(`${configMock.api.base}${configMock.api.endpoints.config}`);

    expect(resTypeSpy).toHaveBeenCalledWith('html');
    expect(resStatusSpy).toHaveBeenCalledWith(404);
    expect(resSendSpy).toHaveBeenCalledWith(expect.any(String));
  });

  it('should unsuccessfully render the page', async () => {
    appApi = {
      fetch: jest.fn().mockRejectedValue({}),
    };

    const entry = notFoundEntry(appConfig, appApi);

    const resSendSpy = jest.fn();
    const resTypeSpy = jest.fn();
    const resStatusSpy = jest.fn();

    const resSpy = {
      type: resTypeSpy,
      send: resSendSpy,
      status: resStatusSpy,
    };

    try {
      entry(jest.fn() as any, resSpy as any, jest.fn());
    } catch (e) {
      expect(resStatusSpy).toHaveBeenCalledWith(500);
      expect(resSendSpy).toHaveBeenCalledWith(expect.any(String));
    }
  });
});
