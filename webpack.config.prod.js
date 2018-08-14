const path = require('path');
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin') //开启多线程进行加快速度
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

module.exports = {
  mode: "production",
  entry: {
    index: './src/Frame/MainFrame.js',
  },
  output: {
    publicPath: "./",
    filename: '[name].js',
	  chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vue': 'vue/dist/vue.common',
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new VueLoaderPlugin,
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
      inject: true,
      chunks: ['index'],
    }),
	  new CopyWebpackPlugin([
		  {
			  from: path.resolve(__dirname, './src/Images'),
			  to: 'Images',
			  ignore: ['.*']
		  }
	  ]),
    new UglifyJSPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    //开启多线程进行打包
	  new HappyPack({
		  id: 'happy-babel-js',
		  loaders: ['babel-loader?cacheDirectory=true'],
		  threadPool: happyThreadPool
	  })
  ],
  // optimization:{
  //   splitChunks: {  // 加这个打包会变慢很多
  //     chunks: "all",
  //     minSize: 30000,
  //     minChunks: 1,
  //     maxAsyncRequests: 5,
  //     maxInitialRequests: 3,
  //     name: true,
  //     cacheGroups: {
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true,
  //       },
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10
  //       }
  //     }
  //   }
  // },
  module: {
    rules: [
      {test: /\.vue$/, loader: 'vue-loader'},
      // {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.js$/, loader: 'happypack/loader?id=happy-babel-js',include: [path.resolve('src')], exclude: /node_modules/},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      // {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
      {test: /\.json$/, loader: 'json-loader'},
      // {test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/, loader: 'url-loader?limit=8192'},
      {test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)(\?\S*)?$/, loader: 'file-loader?name=font/[name]-[hash].[ext]&publicPath=/vue-multi-tab'},
      // {test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, loader: 'file-loader?publicPath=/'},
    ]
  }
};
