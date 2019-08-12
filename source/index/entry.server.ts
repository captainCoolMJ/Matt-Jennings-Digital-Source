import { RequestHandler } from 'express';
import { AppConfiguration } from '../app/configuration.server';
import { indexComponent } from './component.server';
import { AppConfigurationInterface } from '../app/configuration.interface';
import { PortfolioItemInterface } from '../portfolio/item.interface';
import { Api } from '../common/api';

export const indexEntry = (appConfig: AppConfiguration, appApi: Api): RequestHandler => async (req, res, next) => {
  try {
    const response = await Promise.all([
      appApi.fetch<AppConfigurationInterface>(`${appConfig.get().api.base}${appConfig.get().api.endpoints.config}`),
      appApi.fetch<Array<string>>(`${appConfig.get().api.base}${appConfig.get().api.endpoints.skills}`),
      appApi.fetch<Array<PortfolioItemInterface>>(
        `${appConfig.get().api.base}${appConfig.get().api.endpoints.portfolio}`,
      ),
    ]);

    res.type('html');
    res.send(
      indexComponent({
        config: appConfig.getUnsafe(),
        site: response[0],
        skills: response[1],
        portfolio: response[2],
      }),
    );
  } catch (e) {
    console.info(e);
    res.status(500);
    res.send('Server Error');
  }
};
