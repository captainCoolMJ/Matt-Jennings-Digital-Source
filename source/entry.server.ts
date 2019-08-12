import minimist from 'minimist';
import dotenv from 'dotenv';
import express from 'express';
import compression from 'compression';
import path from 'path';
import fs from 'fs';

import { AppConfigurationService } from './app/configuration.service.server';
import { indexEntry } from './index/entry.server';
import { notFoundEntry } from './not-found/entry.server';
import { AppApiService } from './app/api.service';

export const entry = (options: {
  assets: Record<string, string>;
  assetsPath: string;
  gtmKey: string;
  port: string;
  apiBase: string;
}) => {
  const appConfig = AppConfigurationService();

  appConfig.set({
    keys: {
      gtm: options.gtmKey,
    },
    port: parseInt(options.port, 10),
    assets: options.assets,
    api: {
      base: options.apiBase,
      endpoints: {
        timeline: '/timeline.json',
        config: '/site_config.json',
        skills: '/skills.json',
        portfolio: '/portfolio.json',
      },
    },
  });

  const app = express();

  app.disable('x-powered-by');
  app.use(compression());

  app.get('/', indexEntry(appConfig, AppApiService()));
  app.use(express.static(path.resolve(`${options.assetsPath}`)));
  app.get('*', notFoundEntry(appConfig, AppApiService()));

  app.listen(appConfig.getUnsafe().port, () => {
    console.info(`listening on port ${appConfig.getUnsafe().port}`);
  });
};

dotenv.config();
const args = minimist(process.argv.slice(2));

try {
  entry({
    assets: JSON.parse(fs.readFileSync(path.resolve(`${args.public}/assets/manifest.json`)).toString()),
    assetsPath: args.assets,
    gtmKey: process.env.KEYS_GTM,
    port: process.env.PORT,
    apiBase: process.env.API_BASE,
  });
} catch (e) {
  console.info(e);
}
