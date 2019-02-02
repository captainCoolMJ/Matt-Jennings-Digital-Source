const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

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
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                  'isomorphic-style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 1
                    }
                  },
                  {
                      loader: 'postcss-loader',
                      options: {
                          plugins: [require('autoprefixer')]
                      }
                  }
                ]
            }
            // {
            //   test: /\.css$/,
            //   use: [
            //     ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: ['css-loader']
            //     }),
            //     // {
            //     //   loader: 'style-loader',
            //     // },
            //     // {
            //     //   loader: 'css-loader',
            //     //   options: {
            //     //     modules: true,
            //     //     localIdentName: '[hash:base64:8]',
            //     //   },
            //     // },
            //     {
            //       loader: 'postcss-loader',
            //       options: {
            //         plugins: [require('autoprefixer')],
            //       },
            //     },
            //   ],
            // },
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
    plugins: config.plugins.concat(new HtmlWebpackPlugin({
       template: './source/index.html',
       filename: '../index.html',
       minify: true
    }))
});

const serverConfig = Object.assign({}, config, {
    entry: './source/server/entry.ts',
    target: 'node',
    externals: [nodeExternals()],
    output: Object.assign({}, config.output, {
        filename: 'app.js'
    })
});

module.exports = [clientConfig, serverConfig];