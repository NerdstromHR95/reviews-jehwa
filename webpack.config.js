const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CLI_DIR = path.join(__dirname, '/client');



module.exports = {
    entry: `${CLI_DIR}/index.js`,
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                include: CLI_DIR,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./client/index.html",
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};