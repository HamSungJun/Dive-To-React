const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js'
  },
  devServer: {
    hot: 'only',
    historyApiFallback: true,
    open: true
  }
})
