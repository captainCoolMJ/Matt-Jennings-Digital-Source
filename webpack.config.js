const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const pkg = require('./package.json');

module.exports = (env = {}) => ({
  entry: {
    index: ['./scripts/polyfills.js', 'whatwg-fetch', './source/index/entry.ts'],
    notFound: ['./scripts/polyfills.js', 'whatwg-fetch', './source/not-found/entry.ts'],
  },
  mode: env.production ? 'production' : 'development',
  devtool: env.production ? undefined : 'cheap-module-eval-source-map',
  output: {
    path: path.resolve('./public/assets/'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { modules: { mode: 'global' } },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')],
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.css'],
  },
  plugins: [
    new webpack.BannerPlugin(`${pkg.name} ${new Intl.DateTimeFormat().format(new Date())}`),
    new ManifestPlugin({
      path: path.resolve('./public'),
    }),
    new CleanWebpackPlugin(),
    new CheckerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
    }),
    new CopyPlugin([{ from: './static' }]),
  ],
});
