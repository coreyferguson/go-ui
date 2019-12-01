
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const stage = process.env.stage || 'dev';
const envConfig = path.resolve(__dirname, `src/config/config-${stage}.json`);

module.exports = {
  entry: './src/index.js',
  resolve: {
    alias: { appConfig: envConfig },
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
  },
  externals: {
    'aws-sdk': 'AWS'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [ 'file-loader' ]
    }]
  }
};
