const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const bundleOutputDir = './wwwroot/dist';

module.exports = {
    entry: {
        main: './ClientApp/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, bundleOutputDir)
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            { test: /\.(woff|woff2|eot|ttf|otf)$/, loader: 'file-loader' },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=75000' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].site.css'
        })
    ]
};