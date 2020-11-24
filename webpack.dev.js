/*webpack的开发环境*/
/*webpack的开发环境*/
const { merge}=require('webpack-merge');
const common = require('./webpack.common.js');

module.exports=merge(common,{
    mode:'development',
   // devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',   //#端口直接的文件夹
        port: 3030,             //#端口号
        hot: true               //#热模块替换
    }
    
});


