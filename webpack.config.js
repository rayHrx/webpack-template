const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {app: './app.js'
    //,vendors: './src/vendors.js'
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist/assets/media"),
        compress: true,
        port: 12000,
        stats: 'errors-only',
        open: true
    },
    devtool: 'inline-source-map',
    module: {
        rules:[
            {
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env']
                        }
                    }
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            // {
            //     test: /\.scss$/,
            //     include: [path.resolve(__dirname, 'src', 'assets', 'scss')],
            //     use: ['css-loader','sass-loader','style-loader']
            // },
            // { 
            //     test: /\.scss$/, 
            //     use: ExtractTextPlugin.extract({
            //         use: 'css-loader!sass-loader?indentedSyntax=false',
            //         fallback: 'style-loader' 
            //     })
                
            // }
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?indentedSyntax=false'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({template: 'index.html'}),
        //new ExtractTextPlugin('./assets/css/app.css')
    ]
  }