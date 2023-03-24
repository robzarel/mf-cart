const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPluging = require('webpack/lib/container/ModuleFederationPlugin');

const ID_DEV = process.env.NODE_ENV === 'dev';

module.exports = {
  mode: ID_DEV ? 'development': 'production',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build/static'),
    publicPath: ID_DEV ? 'static/': 'https://robzarel.github.io/mf-cart/static/'
  },
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPluging({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartShow': './src/index'
      },
      shared: {
        faker: {
          singleton: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './public/index.html',
    })
  ]
};
