const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

// 基础端口号
const serverPort = 3000;

const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: "inline-source-map", // 报错的时候在控制台输出哪一行报错
  watchOptions: {
    ignored: /node_modules/ // 排除监听文件夹
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热加载
    new webpack.NamedModulesPlugin() // 热加载时直接返回更新文件名,而非文件id
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    open: true,
    port: serverPort,
    publicPath: 'http://localhost:3000/', //此路径下的打包文件可在浏览器中访问。
    host: 'localhost', // 使外部可以访问
    hot: true, // 启用 webpack 的模块热替换特性
  }
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = serverPort
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        // 清除控制台原有的信息
        clearConsole: true,
        // 打包成功之后在控制台给予开发者的提示
        compilationSuccessInfo: {
          messages: [`开发环境启动成功，项目运行在: http://${devWebpackConfig.devServer.host}:${port}`]
        },
        // 打包发生错误的时候
        onErrors: () => {
          console.log("打包失败")
        }
      }))

      resolve(devWebpackConfig)
    }
  })
})