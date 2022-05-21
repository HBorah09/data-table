
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
          },
          compress: true,
          port: 3000,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
                new HtmlWebpackPlugin({
                    template: 'public/index.html',
                })
            ],
            resolve: {extensions: ['.js', '.jsx']}
    }