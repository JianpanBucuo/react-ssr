const { resolve } = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')
const clientConfig = {
    entry: resolve(__dirname, './src/client/index.js'),
    output: {
        filename: 'index.js',
        path: resolve(__dirname, 'public')
    }
}
module.exports = merge(config, clientConfig)