
const merge = require('webpack-merge');
const argv = require('yargs').argv;
const common = require('./webpack.common.js');
const webpack = require('webpack');

let port = 8088;
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        port: port,
        open: false,
        host:'localhost',
        progress: true, // 打包过程中的进度条
        noInfo: false, // 隐藏bundle信息
        historyApiFallback: true,
        proxy: { // 代理
        },
    },
    plugins: [
        // 热更新插件
        new webpack.HotModuleReplacementPlugin(),
    ]
})