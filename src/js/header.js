/*

*/
const showText=function (tCanvas){
    console.log("---",tCanvas)
    tCanvas.font = "48px serif";
    tCanvas.fillText("Hello world", 10, 50);
    return false;
}

const setCha=function(cxt,x,y,d){
	var x0=d,y0=3*d;
	cxt.moveTo(x-x0,y-y0);
	cxt.lineTo(x,y);
	cxt.lineTo(x+x0,y-y0);
    cxt.stroke();
    return true;
}

export { showText,setCha};