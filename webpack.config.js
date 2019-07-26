const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const pkg = require('./package.json');

module.exports = (env = {}) => ({
    entry: {
        main: './src/js/script.js',
    },
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? undefined : 'cheap-module-eval-source-map',
    output: {
        path: path.resolve('./public/assets/scripts'),
        publicPath: 'scripts/',
        filename: 'app.[hash].js'
    },
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new webpack.BannerPlugin(`${pkg.name} ${new Intl.DateTimeFormat().format(new Date())}`),
        new ManifestPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/app.*.js'],
        }),
    ],
});