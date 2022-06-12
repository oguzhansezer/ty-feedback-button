const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './serve/serve.tsx',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, '/webpack-dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: './webpack-dist'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './serve/index.html'
        })
    ]
};
