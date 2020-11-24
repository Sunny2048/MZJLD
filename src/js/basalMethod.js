/***
 * sunny
 * 基础函数方法
 */

export function errorftn(ftnname,eObj){
    try{
        console.error(ftnname+"模块-错误提示:",eObj);
    }catch (e){

        alert("模块-错误："+ftnname+";"+eObj.name + ": " + eObj.message);
    }

}

/*
数组去重
*/
export function Arrayuniq(array){
    var temp = {}, r = [], len = array.length, val, type;
    for (var i = 0; i < len; i++) {
        val = array[i];
        type = typeof val;
        if (!temp[val]) {
            temp[val] = [type];
            r.push(val);
        } else if (temp[val].indexOf(type) < 0) {
            temp[val].push(type);
            r.push(val);
        }
    }
    return r;
}



    /*
补齐两位数
    */
   export  function compleString(str,num,exstr){
    str+="";
  if(str.length<num){

      for(var i=0;i<(num-str.length);i++){
          str=exstr+str;
      }
      
      return str;

  }else{
      return str;
  }
}


export function PVIDate(e) {
//var temp = e.split("-");
var date =(!e)?new Date():new Date(e);

if (isNaN(date.getFullYear())) {
if (e.indexOf("-") > -1) {
date = new Date(e.replace(/\-/g, "/"));
}

if (e.indexOf(".") > -1) {
date = new Date(e.replace(/\./g, "/"));
}
}

return date;
}