const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html模板

module.exports = {
  entry: {
    "index":"./src/index.ts"
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({ // html 模板
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true //折叠空白区域 也就是压缩代码
      },
      hash: true,
    }),
  ],
  //别名配置
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    }
  },
  module: {
    rules: [
      // 处理typescript
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      // 处理js
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ]
  },
};