const webpack = require('webpack');
const path = require('path');
const Glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'js/main.js': [
      './src/js/main.ts'
    ],
    'css/main.css': [
      './src/css/main.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name]'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
    alias: {
        jquery: "jquery/src/jquery"
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
        filename: "[name]",
        disable: process.env.NODE_ENV === "development"
    }),
    new OptimizeCssAssetsPlugin(),
    new CopyWebpackPlugin([
      {
        from: './src/images',
        to: './images',
        force: true
      },
      {
        from: './src/fonts',
        to: './fonts',
        force: true
      },
      {
        from: './src/.htaccess',
        to: '[name].[ext]',
        force: true
      },
      {
        from: './src/*.php',
        to: '[name].[ext]',
        force: true
      },
      {
        from: './src/templates',
        to: './templates',
        force: true
      }
    ])
  ],
  module: {
    loaders: [
      { 
        test: /\.ts$/, 
        loader: 'ts-loader' 
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader?limit=100000' 
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          fallback: "style-loader"
        })
      }
    ]
  }
};