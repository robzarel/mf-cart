const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPluging = require('webpack/lib/container/ModuleFederationPlugin');

const IS_DEV = process.env.MODE === 'dev';

const config = {
  mode: IS_DEV ? 'development': 'production',
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPluging({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartShow': './src/bootstrap'
      },
      shared: ['faker']
    }),
    new HtmlWebpackPlugin({
      filename: IS_DEV ? 'index.html' : '../index.html',
      template: './public/index.html',
    })
  ]
};

// bugfix: when publicPath is setted to '/' container can't load script
if (!IS_DEV) {
  config.output = {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build/static'),
    publicPath: 'static/'
  };
}

module.exports = config;
