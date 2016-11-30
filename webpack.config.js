//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const develop = process.env.NODE_ENV === 'development';
pluginsArray = [];
if (!develop) {
  pluginsArray.push(new webpack.optimize.UglifyJsPlugin({ sourceMap:false }));
};
module.exports = {
    entry: [
      './src/app.js',
    ],

    output: {
        path:  __dirname + '/dist',
        filename: '[name].js',
        publicPath: '/dist/'
    },
    devtool: develop ? 'cheap-inline-module-source-map': null,
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.scss$/, loaders:["style-loader", "css-loader", "sass-loader"]}
        ]
    },
    plugins: pluginsArray
}