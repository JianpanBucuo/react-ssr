const webpack = require('webpack')
const webpackNodeExternals = require('webpack-node-externals')
const { resolve } = require('path')
module.exports = {
    target: 'node', //打包服务器端代码
    externals: [webpackNodeExternals()], //不会把 node_modules 打包到文件里
    mode: 'development',
    entry: resolve(__dirname, './src/index.js'),
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    // 编译规则
                    presets: ['@babel/preset-react']
                    // preset: ['react', ['env', {
                    //     target: {
                    //         browers: ['last 2 versions']
                    //     }
                    // }]]
                }
            }
        ]
    }
}