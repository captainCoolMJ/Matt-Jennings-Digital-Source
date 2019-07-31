import minimist from 'minimist';
import dotenv from 'dotenv';
import express from 'express';
import compression from 'compression';
import path from 'path';
import fs from 'fs';

import { stringTemplateReplace } from './helper/string/template-replace';
import { AppConfigurationService } from './app/configuration.service.server';
import { AppConfiguration } from './app/configuration.server';

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

const renderFile = (config: AppConfiguration) => (file: string): string =>
  stringTemplateReplace(fs.readFileSync(path.resolve(file)).toString(), appConfig.getUnsafe());

const routes = {
  index: renderFile(appConfig)(`${args.public}/index.html`),
  '*': renderFile(appConfig)(`${args.public}/404.html`),
};

const app = express();

app.disable('x-powered-by');
app.use(compression());

app.get('/', (req, res, next) => res.send(routes.index));
app.use(express.static(path.resolve(`${args.assets}`)));
app.get('*', (req, res, next) => res.status(404).send(routes['*']));

app.listen(appConfig.getUnsafe().port, () => {
  console.info(`listening on port ${appConfig.getUnsafe().port}`);
});
