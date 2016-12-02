const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const develop = process.env.NODE_ENV === 'development';
const pluginsArray = [];

if (!develop) {
  pluginsArray.push(new webpack.optimize.UglifyJsPlugin());
};
pluginsArray.push(new HtmlWebpackPlugin({ template: 'index.html' }));
module.exports = {
    entry: [
      './src/app.js',
    ],

    output: {
        path:  'dist',
        filename: '[name]_[hash].js'
    },
    devtool: develop ? 'cheap-inline-module-source-map': null,
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            { test: /\.scss$/, loaders:["style", "css", 'postcss', "sass" ]}
        ]
    },
    plugins: pluginsArray
}