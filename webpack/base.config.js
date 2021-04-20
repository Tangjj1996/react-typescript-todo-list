const path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, "../src/index.ts")
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_[chunkhash:8].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.(t|j)sx?$/,
      loader: 'babel-loader'
    }]
  }
}