var path = require("path");
var webpack = require("webpack");
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: {
      app: "./app/app.ts",
      vendor: './app/vendor.ts',
      polyfills: './app/polyfills.ts',
    },
    output: {
      filename: "./app.build/[name].build.js",
    },
    resolve: {
      extensions: ['', '.js', '.ts']
    },
    resolveLoader: {
      root: path.join(__dirname, 'node_modules')
    },
    module: {
      loaders: [
        {
          test: /\.ts$/,
          loaders: ['awesome-typescript-loader'],
          tsconfig: './tsconfig,json'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
      }),
    ]
  },
  {
    entry: './app/app.scss',
    output: {
      filename: './app.build/app.build.styles.js'
    },
    resolve: {
      extensions: ['', '.scss']
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("style", "css!sass")
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("./app.build/app.build.css")
    ]
  },
  // {
  //   entry: './app/specs.js',
  //   output: {
  //     filename: './specs.build/specs.build.js'
  //   },
  //   resolve: {
  //     extensions: ['', '.ts', '.js']
  //   },
  //   module: {
  //     loaders: [
  //       { test: /\.js$/, loader: 'babel-loader' }
  //     ]
  //   }
  // }
];
