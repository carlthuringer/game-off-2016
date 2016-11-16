const express = require('express')
const webpack = require('webpack')
const spawn = require('child_process').spawn
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')

const app = express()
const compiler = webpack(config)
const PORT = process.env.PORT || 9000

const wdm = webpackDevMiddleware(compiler, {
  path: config.output.path,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
})

process.env.ENV = 'development'

app.use(wdm)
app.use(webpackHotMiddleware(compiler))

const server = app.listen(PORT, 'localhost', function (serverError) {
  if (serverError) {
    return console.error(serverError)
  }

  spawn('yarn', ['start'], { shell: true, env: process.env, stdio: 'inherit' })
    .on('close', function (code) { process.exit(code) })
    .on('error', function (spawnError) { console.error(spawnError) })

  console.log(`Listening at http://localhost:${PORT}`)
})

process.on('SIGTERM', function () {
  console.log('Stopping dev server')
  wdm.close()
  server.close(function () {
    process.exit(0)
  })
})
