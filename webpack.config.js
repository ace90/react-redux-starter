const path = require('path');

module.exports = {
  mode: 'none',
  entry: {
    app: ['app/app.tsx']
  },
  devtool: "source-map",
  module: {
    rules: [
      {
         test: /\.tsx?$/,
         use: 'ts-loader'
      }
    ]
  },
  watch: true,
  externals: {
       "jquery": "$"
  },
  output: {
      filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: [
      path.join(__dirname),
      'node_modules'
    ],
    extensions: ['.ts', '.tsx', '.js']
  }
};
