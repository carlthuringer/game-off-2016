const path = require('path')

module.exports = {
  entry: {
    main: './src/App.ts',
    bundle: './src/bundle.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:9000/dist/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.elm'],
    modules: [
      'node_modules'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.elm$/,
        exclude: ['/elm-stuff/', '/node-modules/'],
        loader: 'elm-webpack-loader'
      }
    ]
  },
  devtool: 'source-map',
  target: 'electron',
  node: {
    __dirname: false
  }
}
