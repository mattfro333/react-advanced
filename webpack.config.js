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
      {test: /\.(jpe?g|png|gif|svg)$/i, exclude: /node_modules/, use: 'babel-loader?name=/lib/public/[name].[ext]'}
    ]
  }
};

module.exports = config;
