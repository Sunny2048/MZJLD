/*webpack的生产环境*/
const { merge }=require('webpack-merge');
const common =require('./webpack.common.js');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports=merge(common,{
    mode:'production',
   // devtool:'source-map',
  
   optimization:{
    ///splitChunks---单独打包-jQuery
    splitChunks:{
      
        cacheGroups:{
            commons:{
                test:/jquery/,
                name:'jquery',
                chunks:'all'
            }
        }
    }
    
}
    
});