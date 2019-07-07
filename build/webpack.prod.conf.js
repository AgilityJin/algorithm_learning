const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清空打包目录的插件

const webpackConfig = merge(baseWebpackConfig, {
  plugins: [
    new CleanWebpackPlugin(),
  ],
})

module.exports = webpackConfig;