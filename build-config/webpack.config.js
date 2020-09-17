const path = require('path')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


const resolve = function (filePath) {
    return path.join(__dirname, filePath)
}
module.exports = {
    entry: resolve('/src/index.js'),
    output: {
        path: resolve('/dist'),
        filename: 'index.min.js',
        libraryTarget: 'umd',
        umdNamedDefine: true // 非匿名
    },
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            targets: ["dist"]
        })
    ],
    optimization: {
        minimizer: [
            new UglifyWebpackPlugin({
                parallel: 4
            })
        ]
    },
    externals: {}
}
