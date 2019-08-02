const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const pkg = require('./package.json');

module.exports = (env = {}) => ({
  entry: {
    styles: './src/ts/main.css',
    index: './src/ts/index.entry.ts',
    notFound: './src/ts/not-found.entry.ts',
  },
  mode: env.production ? 'production' : 'development',
  devtool: env.production ? undefined : 'cheap-module-eval-source-map',
  output: {
    path: path.resolve('./public/assets/'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
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
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
    }),
    new CopyPlugin([{ from: './static' }]),
  ],
});
