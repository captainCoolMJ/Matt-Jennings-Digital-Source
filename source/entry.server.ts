import minimist from 'minimist';
import dotenv from 'dotenv';
import express from 'express';
import compression from 'compression';
import path from 'path';
import fs from 'fs';

import { AppConfigurationService } from './app/configuration.service.server';
import { indexComponent } from './index/component.server';
import { notFoundComponent } from './not-found/component.server';
import { AppDatabaseService } from './app/database.service.server';
import { AppConfigurationInterface } from './app/configuration.interface';
import { PortfolioItemInterface } from './portfolio/item.interface';

export const entry = (options: {
  assets: Record<string, string>;
  assetsPath: string;
  databaseUrl: string;
  databaseSecret: string;
  gtmKey: string;
  port: string;
}) => {
  const appConfig = AppConfigurationService();

  appConfig.set({
    keys: {
      gtm: options.gtmKey,
    },
    port: parseInt(options.port, 10),
    assets: options.assets,
  });

  const app = express();

  app.disable('x-powered-by');
  app.use(compression());

  const db = AppDatabaseService();

  app.get('/', async (req, res, next) => {
    try {
      const response = await Promise.all([
        db.query<AppConfigurationInterface>('/site_config'),
        db.query<Array<string>>('/skills'),
        db.query<Array<PortfolioItemInterface>>('/portfolio'),
      ]);

      appConfig.set({
        api: response[0].api,
      });

      res.type('html').send(
        indexComponent({
          config: appConfig.getUnsafe(),
          site: response[0],
          skills: response[1],
          portfolio: response[2],
        }),
      );
    } catch (e) {
      console.info(e);
      res.status(500).send('Server Error');
    }
  });
  app.use(express.static(path.resolve(`${options.assetsPath}`)));
  app.get('*', async (req, res, next) => {
    try {
      const response = await db.query<AppConfigurationInterface>('/site_config');
      res
        .type('html')
        .status(404)
        .send(
          notFoundComponent({
            config: appConfig.getUnsafe(),
            site: response,
          }),
        );
    } catch (e) {
      console.info(e);
      res.status(500).send('Server Error');
    }
  });

  db.connect({
    databaseSecret: options.databaseSecret,
    databaseUrl: options.databaseUrl,
  }).then(() => {
    app.listen(appConfig.getUnsafe().port, () => {
      console.info(`listening on port ${appConfig.getUnsafe().port}`);
    });
  });
};

dotenv.config();
const args = minimist(process.argv.slice(2));

try {
  entry({
    assets: JSON.parse(fs.readFileSync(path.resolve(`${args.public}/assets/manifest.json`)).toString()),
    assetsPath: args.assets,
    databaseSecret: process.env.DATABASE_SECRET,
    databaseUrl: process.env.DATABASE_URL,
    gtmKey: process.env.KEYS_GTM,
    port: process.env.PORT,
  });
} catch (e) {
  console.info(e);
}
