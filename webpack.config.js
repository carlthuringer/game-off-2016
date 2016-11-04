module.exports = {
  entry: './src/main.ts',
  output: {
    path: 'dist',
    filename: 'main.js'
  },
  module: {
    rules: [
      {}
    ]
  },
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  node: {
    fs: "empty"
  }
}
