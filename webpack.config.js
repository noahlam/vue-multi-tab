const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  mode: "development",
  entry: {
    index: './src/frame/mainfraim.js',
  },
  output: {
    publicPath: "/",
    filename:  '[name].js',
	  chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue',
      '@': path.resolve(__dirname, './src'),
    }
  },
  devServer: {
    host: 'localhost',
    inline: true,
    port:8117,
    publicPath: '/',
  },
  plugins: [

    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: {loader: 'babel-loader',}},
      {test: /\.json$/, use: 'json-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.vue$/, use: 'vue-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      // {test: /\.scss$/, loader:'style-loader!css-loader!sass-loader'},
      {test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, loader: 'file-loader?name=font/[name]-[hash].[ext]'},

    ]
  }
};

module.exports = webpackConfig