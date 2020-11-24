const path=require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack=require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//const dir_publicPath="/";
module.exports={
    entry:{
       // index:'./src/emrviewdoctor/scripts/event/index.js'
       index:'./src/js/index.js'
    },
    output:{
        filename:'js/[name].js',
        path:path.resolve(__dirname,'dist'),
        publicPath: "./",
       
    },
    /*
    resolve:{
      resource:path.resolve(__dirname, 'src/resource/')

    },*/
    module:{
        rules:[
         
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {                
                  publicPath: '../'
                },
              },
              'css-loader',
            ],
          }/*,{
          //处理图片
          test:/\.(png|svg|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
                publicPath: process.env.PUBLIC_PATH,
                name: 'resource/image/[name].[ext]'
            }
        }
        },{
          test: /\.(ttf|eot|svg|woff|woff2)$/,
          use: {
              loader: 'file-loader',
              options: {
                  publicPath: process.env.PUBLIC_PATH,
                  name: 'resource/font/[name].[ext]'
              }
          }
      }/*,{
          test: /\.js$/,
          loader: 'babel-loader',  //
          options: {
                presets: ['es2015']
           },
         // include: [resolve('src')]
        }, */ 
      ]
      },
    plugins:[

        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: 'resource/css/[name].css',
          chunkFilename: '[id].css',
          ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        // 设置html模板生成路径
        new HtmlWebpackPlugin({
           title:'患者视图-麻醉记录单',
           filename: 'index.html',
           template: './src/index.html',
           inject:true,
           hash:true,
           chunks: ['jquery','index']
       }),
       
       /*全局引入jQuery，不需要单独在程序中加载了*/
       new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        "window.jquery":'jquery',
        'window.jQuery': 'jquery'
       })
      
       
    ]
};