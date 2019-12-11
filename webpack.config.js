const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'game.js'),
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash:true,
            filename: "./index.html"
        })
    ],
    devServer: {
        contentBase: './src',
        publicPath: '/dist'
    }
};
