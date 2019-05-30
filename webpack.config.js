const path = require('path');

const config = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ]
  },
  entry: ['babel-polyfill', './lib/components/renderers/dom.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},


  {
                   test: /\.(png|jp(e*)g|gif|svg)$/,
                   use: [
                       {
                           loader: 'url-loader',
                           options: {
                               limit: 8000,
                               name: '[hash]-[name].[ext]',
                               publicPath: 'images/'
                           }
                       }
                   ]
               },

           ]
       },
};

module.exports = config;
