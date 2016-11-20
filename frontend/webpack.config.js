const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  debug: true,
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:9000/__webpack_hmr',
    './src/renderer.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:9000/dist/',
    filename: 'renderer.js'
  },
  resolve: {
    extensions: ['', '.elm', '.js'],
    modules: [
      'node_modules'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.elm$/,
        exclude: ['/elm-stuff/', '/node-modules/'],
        loader: 'elm-hot!elm-webpack-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([{
      from: './src/index.html'
    },
    {
      from: './src/main.js'
    }])
  ],
  devtool: 'source-map',
  target: 'electron-renderer'
}
