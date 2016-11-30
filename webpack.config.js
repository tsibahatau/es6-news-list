var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "./dist/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')}
        ]
    },
    plugins: [
        new ExtractTextPlugin('dist/style.css', {
            allChunks: true
        })
    ]
}