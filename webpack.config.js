var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
var LIB_PATH = path.resolve(APP_PATH, 'js/lib');

module.exports = {
    entry: {
        app : path.resolve(APP_PATH, 'js/main.js'),
        vendor: ['angular','angular-ui-router'] //需要进库的插件包
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', ''],
        alias:{
            'anijs': path.resolve(APP_PATH,'js/lib/anijs')
        }
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: '机构平台',
            template: path.resolve(APP_PATH, 'main.html'),
            filename: 'main.html'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js"
        }),

        new CopyWebpackPlugin([
            {from: path.resolve(ROOT_PATH, 'api'), to: 'api'}
        ]),

        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
            __PROD__: JSON.stringify(JSON.parse(process.env.BUILD_PROD || 'false')),
            __LOCAL__: JSON.stringify(JSON.parse(process.env.BUILD_LOCAL || 'false'))
        })
    ],

    // dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 3333,
        contentBase: '/dist',
        colors: true
    },
    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                loaders: ['style', 'css', 'sass']
                //include:APP_PATH
            },
            {
                test: /\.(png|jpg|woff|svg|ttf|eot)\??.*$/,
                loader: 'file-loader?name=img/[hash].[ext]'
            }
        ]
    },

    eslint: {
        configFile: '.eslintrc' //Rules for eslint
    },

    devtool: 'eval-source-map'
};
