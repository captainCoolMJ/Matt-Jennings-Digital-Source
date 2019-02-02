const { CheckerPlugin } = require('awesome-typescript-loader');
const DotEnv = require('dotenv-webpack')
const path = require('path');

const config = {
    entry: './source/entry.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CheckerPlugin(),
    ],
};

const serverConfig = Object.assign({}, config, {
    target: 'node',
    output: Object.assign({}, config.output, {
        filename: 'app.js'
    }),
});

module.exports = [serverConfig];