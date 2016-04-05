var path = require('path'),
    webpack = require('webpack');

module.exports = {
  entry: {
    loginApp: './app/cores/loginApp.js',
    mainApp: './app/cores/mainApp.js'
  },
  output: {
    path: path.join(__dirname, './app/public'),
    publicPath: 'public/',
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.png$/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    })
  ]
};
