// Configuración de webpack
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    // Modo del build
    mode: 'development',

    // Módulos de archivos
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg|webp)$/,
                type: 'asset/resource',
                generator: {
                    publicPath: 'assets/',
                    outputPath: 'assets/'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    // Colocar en una sola linea
                    minimize: false,
                }

            }
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: './index.html',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
    ]
}