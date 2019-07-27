const minimist = require('minimist');
const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs');
const templateReplace = require('./helper/string/template-replace');

const args = minimist(process.argv.slice(2));
const manifest = __non_webpack_require__('./assets/scripts/manifest.json');
const configuration = __non_webpack_require__('./configuration.json');

const renderFile = (config) => (file) => templateReplace(fs.readFileSync(path.resolve(file)).toString(), config);
const renderToString = renderFile({
    ...configuration,
    scripts: {
        index: manifest['index.js'],
        notFound: manifest['notFound.js'],
    },
});

const routes = {
    index: renderToString(`${args.public}/index.html`),
    '*': renderToString(`${args.public}/404.html`),
};

var app = express();
app.use(compression());

app.get('/', (req, res, next) => res.send(routes.index));
app.use(express.static(path.resolve(`${args.assets}`)));
app.get('*', (req, res, next) => res.status(404).send(routes['*']));

app.listen(args.port, () => {
    console.info(`listening on port ${args.port}`);
});