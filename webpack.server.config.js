const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env = {}) => ({
    entry: './src/js/entry.server.js',
    target: 'node',
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? undefined : 'cheap-module-eval-source-map',
    output: {
        path: path.resolve('./public/'),
        filename: 'server.js'
    },
    externals: [nodeExternals()],
});