const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const config = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new CheckerPlugin(),
    ],
};

const clientConfig = Object.assign({}, config, {
    entry: './source/client/entry.ts',
    output: Object.assign({}, config.output, {
        path: path.resolve(__dirname, 'build/public'),
        filename: 'app.[hash].js'
    }),
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[hash:base64:8]',
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require('autoprefixer')],
                    },
                },
            ],
        }].concat(config.module.rules)
    },
    plugins: config.plugins.concat(
        new HtmlWebpackPlugin({
            template: './source/index.html',
            filename: '../index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].css',
        }),
        new ManifestPlugin({
            fileName: '../manifest.json'
        }),
    ),
});

const serverConfig = Object.assign({}, config, {
    entry: './source/server/entry.ts',
    target: 'node',
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[hash:base64:8]',
                        exportOnlyLocals: true,
                    },
                },
            ],
        }].concat(config.module.rules)
    },
    externals: [nodeExternals()],
    output: Object.assign({}, config.output, {
        filename: 'app.js'
    })
});

module.exports = [clientConfig, serverConfig];