import minimist from 'minimist';
import express from 'express';
import compression from 'compression';
import path from 'path';
import fs from 'fs';

import { ConfigurationInterface } from './configuration.interface';
import { stringTemplateReplace } from './helper/string/template-replace';

const args = minimist(process.argv.slice(2));

const manifest = JSON.parse(fs.readFileSync(path.resolve(`${args.public}/assets/scripts/manifest.json`)).toString());
const configuration = JSON.parse(fs.readFileSync(path.resolve(`${args.public}/configuration.json`)).toString());

const renderFile = (config: ConfigurationInterface) => (file: string): string =>
  stringTemplateReplace(fs.readFileSync(path.resolve(file)).toString(), config);

const config = {
  ...configuration,
  scripts: {
    index: manifest['index.js'],
    notFound: manifest['notFound.js'],
  },
};

const routes = {
  index: renderFile(config)(`${args.public}/index.html`),
  '*': renderFile(config)(`${args.public}/404.html`),
};

const app = express();

app.disable('x-powered-by');
app.use(compression());

app.get('/', (req, res, next) => res.send(routes.index));
app.use(express.static(path.resolve(`${args.assets}`)));
app.get('*', (req, res, next) => res.status(404).send(routes['*']));

app.listen(args.port, () => {
  console.info(`listening on port ${args.port}`);
});
