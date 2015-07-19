var path = require('path');
var webpack = require('webpack');

module.exports = {
    //entry: './es6/module/mainImportAs.js',
    //entry: './es6/module/main.js',
    entry: './es6/arrow-function/arrow.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: path.join(__dirname, 'es6'), loader: 'babel-loader'}
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'

};