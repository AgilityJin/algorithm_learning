const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.optimize.ModuleConcatenationPlugin(), // 预编译
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // UglifyJSPlugin 为防止linux下报错,采取下列写法
      new UglifyJSPlugin({
        sourceMap: true,
        uglifyOptions: {
          // ...
        }
      })
    ]
  }
})

module.exports = webpackConfig
