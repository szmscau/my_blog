var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成build文件夹及文件：

module.exports = {
  entry: './src/app.js',
  devtool: "source-map",//使打包后的代码的报错信息精确到行
  output: {
    // path: path.join(__dirname, 'dist'), // 文件放至当前路径下的 dist 文件夹
    path: path.resolve(__dirname, "./build/js"),//绝对路径,打包发布时才用到 path.resolve将两个相对路径生成了一个绝对路径
    publicPath: '/',//index.html与打包后的js的相对路径
    filename: "js/[name].[hash:5].js"
    // filename: "js/bundle.js"
  },
  devServer: {   //webpack端口设置,默认8080
    historyApiFallback: true,  //当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过传入以下启用
    inline: true, //推荐使用模块热替换的内联模式，因为它包含来自 websocket 的 HMR 触发器。轮询模式可以作为替代方案，但需要一个额外的入口点：'webpack/hot/poll?1000'。
    port: 1010
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".less"],
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'react', 'stage-2']
      }
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    },
    {
      test: /\.less$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'less-loader'
      ]
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  },
  plugins: [
    new BundleAnalyzerPlugin(), //启动分析
    new webpack.HotModuleReplacementPlugin(), //暂时不知道干啥的
    new HtmlWebpackPlugin({  //自动注入代码,生成html
      title: 'ligh站点',
      template: './templates/index.html',
      filename: 'index.html',
      inject: 'body'
  }),
    // new ExtractTextPlugin("css/style.css"),
  ]
};
