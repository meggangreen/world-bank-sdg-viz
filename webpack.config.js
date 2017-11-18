var webpack = require('webpack');

var path = require('path');



var BUILD_DIR = path.resolve(__dirname, 'static/js');

var APP_DIR = path.resolve(__dirname, 'static/jsx');



var config = {

 entry: APP_DIR + '/index.jsx',

 output: {

   path: BUILD_DIR,

   filename: 'bundle.js'

 },
 
 module : {

   loaders : [

     {

       test : /\.jsx?/,

       include : APP_DIR,

       loader : 'babel-loader'

     }

   ]

 }


};



module.exports = config;