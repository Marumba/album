const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const StartServerPlugin = require("start-server-webpack-plugin");

process.noDeprecation = true;

module.exports = {
  entry: ["webpack/hot/poll?1000", "./server/index"],
  watch: true,
  target: "node",
  externals: [nodeExternals({ whitelist: ["webpack/hot/poll?1000"] })],
  module: {
    rules: [
      { test: /\.js?$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.scss$/,
        loader: [
          {
            loader: 'css-loader',
            query: {
              localIdentName: '[name]_[local]_[hash:8]',
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './config/postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ],
  },
  plugins: [
    new StartServerPlugin("server.js"),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": { BUILD_TARGET: JSON.stringify("server") },
    }),
  ],
  output: {
    path: path.join(process.cwd(), ".build"),
    publicPath: '/',
    filename: "server.js",
  },
};
