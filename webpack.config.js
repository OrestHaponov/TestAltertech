const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


let conf = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: 'main.js'
    },
    devServer: {
        overlay: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react'],
                        plugins: [
                            "@babel/plugin-transform-react-jsx",
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg|mov|mp4)$/i,
                use: 'file-loader'
            },
            { 
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000' 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html"
        })
      ]
      
};

module.exports = (env, options) => {
    conf.devtool = options.mode === "production" ?
        false :
        "cheap-module-eval-source-map";
    return conf;
};
