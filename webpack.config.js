const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const pkg = require('./package.json');

module.exports = (env = {}) => ({
    entry: {
        index: './src/ts/index.entry.ts',
        notFound: './src/ts/not-found.entry.ts',
    },
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? undefined : 'cheap-module-eval-source-map',
    output: {
        path: path.resolve('./public/assets/scripts'),
        publicPath: '/scripts/',
        filename: '[name].[chunkhash].js'
    },
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new webpack.BannerPlugin(`${pkg.name} ${new Intl.DateTimeFormat().format(new Date())}`),
        new ManifestPlugin(),
        new CleanWebpackPlugin(),
        new CheckerPlugin(),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            '$': 'jquery',
        }),
    ],
});