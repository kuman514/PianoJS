const path = require('path');

module.exports = {
  entry: './js/App.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'App.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  mode: 'production'
};
