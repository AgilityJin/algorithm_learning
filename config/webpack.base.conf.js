const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
console.log('__dirname: ',__dirname)
module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index.js',
    libraryExport: 'default',
    globalObject: 'this',
    libraryTarget: 'umd'
  },
  //别名配置
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    // copy 静态资源文件
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, "../lib"),
      to: path.resolve(__dirname, "../dist/lib")
    }]),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.resolve(__dirname, '../lib')
      ]
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter'),
          // 是否需要eslint输出警告信息
          emitWarning: false
        }
      },
      // 处理js
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // 处理typescript
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
    ]
  }
}