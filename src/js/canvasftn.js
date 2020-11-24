///BP
function setCha(cxt,x,y,d){
	var x0=d,y0=3*d;
	cxt.moveTo(x-x0,y-y0);
	cxt.lineTo(x,y);
	cxt.lineTo(x+x0,y-y0);
	cxt.stroke();
}
//setCha(30,30,3.5)

//setCha(50,50,-3.5)

function clecri(cxt,x,y){
    var cxt=c.getContext("2d");
    cxt.fillStyle="#FF0000";
    cxt.beginPath();
    cxt.arc(70,18,15,0,Math.PI*2,true);
    cxt.closePath();
    cxt.stroke();
}