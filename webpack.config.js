const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpackConfig = {
  mode: "development",
  entry: {
    index: './src/Frame/MainFrame.js',
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
    host: '0.0.0.0',
    inline: true,
    port:8848,
    publicPath: '/',
  },
  plugins: [

    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
	  new CopyWebpackPlugin([
		  {
			  from: path.resolve(__dirname, './src/Images'),
			  to: 'Images',
			  ignore: ['.*']
		  }
	  ])
  ],
  module: {
    rules: [
	    {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      // {test: /\.js$/, exclude: /node_modules/, use: {loader: 'babel-loader',}},
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
