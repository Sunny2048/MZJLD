import {showText,setCha} from './header.js';
import './../resource/css/index.css';


const MZJLC=document.getElementById("EMR_MZJL");
if (MZJLC.getContext){
    var ctx = MZJLC.getContext('2d');
    // drawing code here
    showText(ctx);

    setCha(ctx,100,100,10)
    setCha(ctx,120,120,10)
   
  } else {
    // canvas-unsupported code here
  }