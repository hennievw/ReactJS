var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        main: ['./src/index.jsx']
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
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],                        
                    }
                }
            }
        ]
    },    
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },   
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};