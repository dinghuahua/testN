const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development', //  production  development
    devtool: 'eval-source-map',
    entry:  __dirname + "/redux/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/redux/bulid",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./redux",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新    只有app中打包的文件 改动才会自动刷新并更新index.html   但是只有index.html改动时不会自动刷新
    },
    /**
     * 在webpack中配置Babel的方法如下:
     */
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/template/index.tmpl.html",//new 一个这个插件的实例，并传入相关的参数
            favicon: './favicon.ico', // 添加小图标
        }),
    ],
}