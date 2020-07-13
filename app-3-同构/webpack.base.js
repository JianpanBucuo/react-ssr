module.exports = {
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    // 编译规则
                    presets: ['@babel/preset-react']
                }
            }
        ]
    }
}