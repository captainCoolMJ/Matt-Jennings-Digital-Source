import { AppConfiguration } from '../app/configuration.server';
import { RequestHandler } from 'express';
import { notFoundComponent } from './component.server';
import { Api } from '../common/api';
import { AppConfigurationInterface } from '../app/configuration.interface';
import { AppInternationalizationType } from '../app/types';

export const notFoundEntry = (
  appConfig: AppConfiguration,
  appApi: Api,
  intl: AppInternationalizationType,
): RequestHandler => async (req, res, next) => {
  try {
    const response = await appApi.fetch<AppConfigurationInterface>(
      `${appConfig.get().api.base}${appConfig.get().api.endpoints.config}`,
    );
    res.type('html');
    res.status(404);
    res.send(
      notFoundComponent(intl)({
        config: appConfig.getUnsafe(),
        site: response,
      }),
    );
  } catch (e) {
    console.info(e);
    res.status(500);
    res.send('Server Error');
  }
};
