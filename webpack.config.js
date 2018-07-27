const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8000,
        contentBase: path.resolve('dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: path.resolve(__dirname,'/node_modules')
        }
    },
    module: {
        rules: [
            {
                test: /.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
  },
  plugins: [htmlWebpackPlugin]
};