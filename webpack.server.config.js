const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const nodeExternals = require('webpack-node-externals');

module.exports = (env = {}) => ({
  entry: './src/entry.server.ts',
  target: 'node',
  mode: env.production ? 'production' : 'development',
  devtool: env.production ? undefined : 'cheap-module-eval-source-map',
  output: {
    path: path.resolve('./public/'),
    filename: 'server.js',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [new CheckerPlugin()],
});
