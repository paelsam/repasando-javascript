// Configuración de webpack
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    // Modo del build
    mode: 'production',
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    },
    output: {
        // Creamos archivo main.js con un hash 
        // Para que no se quede en caché
        filename: 'main.[contenthash].js',
        clean: true
    },
    // Módulos de archivos
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
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
            // Mo viendo imagénes al dist
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
    plugins: [
        new HtmlWebPackPlugin({
            filename: './index.html',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false
        }),
    ]
}