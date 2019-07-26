const minimist = require('minimist');
const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs');

const args = minimist(process.argv.slice(2));
const manifest = require('./assets/scripts/manifest.json');
const configuration = require('./configuration.json');

const configReplace = (contents, config) => {
    Object.keys(config).forEach((key) => {
        if (config[key] instanceof Object) {
            contents = configReplace(contents, Object.keys(config[key]).reduce((acc, cur) => ({
                ...acc,
                [`${key}.${cur}`]: config[key][cur],
            }), {}));
            return;
        }

        contents = contents.replace(new RegExp(`<%=${key}%>`, 'g'), config[key]);
    });

    return contents;
};

const renderFile = (config) => (file) => configReplace(fs.readFileSync(path.resolve(file)).toString(), config);
const renderToString = renderFile({
    ...configuration,
    script: manifest['main.js'],
});

const routes = {
    index: renderToString(`${args.public}/index.html`),
    '*': renderToString(`${args.public}/404.html`),
};

var app = express();
app.use(compression());

app.get('/', (req, res, next) => res.send(routes.index));
app.use(express.static(path.resolve(`${args.assets}`)));
app.get('*', (req, res, next) => res.send(routes['*']));

app.listen(args.port, () => {
    console.info(`listening on port ${args.port}`);
});