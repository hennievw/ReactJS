var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        main: ['./src/index.tsx']
    },
    output: {
        publicPath: "/",
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, `dist/local`)
    },
    devServer: {
        contentBase: path.join(__dirname, `dist/local`),
        historyApiFallback: true,
        compress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: "Basic React JS App",
            template: "index.html",
            chunks: ["vendor", "main"],
            filename: "./index.html",
            environment: "local"
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    },
    devtool: "source-map",

    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },   
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};