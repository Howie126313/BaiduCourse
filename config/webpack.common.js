const path = require('path')
const ClearWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'none',
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.san$/,
                use: 'san-loader'
            },
            {
                test: /\.svg|.jpg|.jpeg|.png$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new ClearWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: 'index.html',
            filename: 'index.html'
        })        
    ]
}