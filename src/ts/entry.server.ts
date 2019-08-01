import minimist from 'minimist';
import dotenv from 'dotenv';
import express from 'express';
import compression from 'compression';
import path from 'path';
import fs from 'fs';

import { AppConfigurationService } from './app/configuration.service.server';
import { Index } from './index.server';
import { NotFound } from './not-found.server';

dotenv.config();

const args = minimist(process.argv.slice(2));
const appConfig = AppConfigurationService();

const manifest = JSON.parse(fs.readFileSync(path.resolve(`${args.public}/assets/scripts/manifest.json`)).toString());

appConfig.set({
  // Configuration JSON file
  // TODO - Move out of repository
  ...JSON.parse(fs.readFileSync(path.resolve(`${args.public}/configuration.json`)).toString()),
  port: parseInt(process.env.PORT, 10),
  scripts: {
    index: manifest['index.js'],
    notFound: manifest['notFound.js'],
  },
});

const app = express();

app.disable('x-powered-by');
app.use(compression());

app.get('/', (req, res, next) => res.type('html').send(Index(appConfig.getUnsafe())));
app.use(express.static(path.resolve(`${args.assets}`)));
app.get('*', (req, res, next) =>
  res
    .type('html')
    .status(404)
    .send(NotFound(appConfig.getUnsafe())),
);

app.listen(appConfig.getUnsafe().port, () => {
  console.info(`listening on port ${appConfig.getUnsafe().port}`);
});
