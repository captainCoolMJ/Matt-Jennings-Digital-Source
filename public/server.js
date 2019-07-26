var minimist = require('minimist');
var express = require('express');
var compression = require('compression');
var path = require('path');

const args = minimist(process.argv.slice(2));

var app = express();

app.use(compression());

app.get('/', (req, res, next) => res.sendFile(path.resolve(`${args.public}/index.html`)));
app.use(express.static(path.resolve(`${args.assets}`)));
app.get('*', (req, res, next) => res.sendFile(path.resolve(`${args.public}/404.html`)));

app.listen(args.port, () => {
    console.info(`listening on port ${args.port}`);
});