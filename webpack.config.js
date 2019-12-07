const path = require('path');
const webpack = require('webpack');

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
        path: path.resolve(__dirname, 'build/dist'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    modules: [
      path.join(__dirname),
      'node_modules'
    ],
    extensions: ['.ts', '.tsx', '.js']
  }
};
