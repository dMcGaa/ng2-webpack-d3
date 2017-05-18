var webpack = require("webpack");

module.exports = require('./config/webpack.prod.js');
//module.exports = require('./config/webpack.dev.js');
/*
 module.exports = {
   entry: './lib/main.js',
   output: {
     path: __dirname + "/lib/",
     filename: 'bundle.js'
   },
   plugins: [
     new webpack.optimize.UglifyJsPlugin(),
     new webpack.ProvidePlugin({
       Reflect: 'core-js/es7/reflect'
     })
   ]
 };
 */