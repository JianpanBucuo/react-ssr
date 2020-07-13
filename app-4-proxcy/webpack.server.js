const merge = require('webpack-merge')
const config = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')
const { resolve } = require('path')
const serverConfig = {
    target: 'node', //打包服务器端代码
    externals: [webpackNodeExternals()], //不会把 node_modules 打包到文件里
    entry: resolve(__dirname, './src/server/index.js'),
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'build')
    }
}
module.exports = merge(config, serverConfig)