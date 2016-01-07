var path = require('path');

module.exports = {
  entry: {
    loginApp: './app/cores/loginApp.js',
    mainApp: './app/cores/mainApp.js'
  },
  output: {
    path: path.join(__dirname, './app/public'),
    filename: "[name].bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.png$/,
        loader: "file?name=[path][name].[ext]"
      }
    ]
  }
};
