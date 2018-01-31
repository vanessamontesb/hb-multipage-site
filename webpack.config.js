const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const path = require('path')

const config = {
  entry: './src/main.js',
  devtool: 'inline-sourceMap',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader?sourceMap'
          ]
        })
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          error: false,
          snazzy: true
        }
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader'}
        ]}
    ]},
  plugins: [
    new StyleLintPlugin({}),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new UglifyJsPlugin({
      uglifyOptions: {
        beautify: false,
        ecma: 6,
        compress: true,
        comments: false
      }
    })
  ]
}

module.exports = config
