import minimist from 'minimist';
import dotenv from 'dotenv';
import express from 'express';
import compression from 'compression';
import path from 'path';
import fs from 'fs';

import { AppConfigurationService } from './app/configuration.service.server';
import { Index } from './index.server';
import { NotFound } from './not-found.server';
import { AppDatabaseService } from './app/database.service.server';
import { AppConfigurationInterface } from './app/configuration.interface';
import { PortfolioItemInterface } from './portfolio/item.interface';

dotenv.config();

const args = minimist(process.argv.slice(2));
const appConfig = AppConfigurationService();

const manifest = JSON.parse(fs.readFileSync(path.resolve(`${args.public}/assets/scripts/manifest.json`)).toString());

appConfig.set({
  keys: {
    gtm: process.env.KEYS_GTM,
  },
  port: parseInt(process.env.PORT, 10),
  assets: {
    styles: manifest['styles.css'],
    index: manifest['index.js'],
    notFound: manifest['notFound.js'],
  },
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
      Index({
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
app.use(express.static(path.resolve(`${args.assets}`)));
app.get('*', async (req, res, next) => {
  try {
    const response = await db.query<AppConfigurationInterface>('/site_config');
    res
      .type('html')
      .status(404)
      .send(
        NotFound({
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
  databaseSecret: process.env.DATABASE_SECRET,
  databaseUrl: process.env.DATABASE_URL,
}).then(() => {
  app.listen(appConfig.getUnsafe().port, () => {
    console.info(`listening on port ${appConfig.getUnsafe().port}`);
  });
});
