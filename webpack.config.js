const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8000,
        contentBase: path.resolve('dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: "[name]_[local]_[hash:base64]",
                    sourceMap: true,
                    minimize: true
                    }
                }
                ]
            }
        ]
  },
  plugins: [htmlWebpackPlugin]
};