var myCanvas = document.getElementById('exo3Canvas')
var canvas = myCanvas.getContext('2d')
canvas.lineWidth = 1
// Début du canvas //
canvas.beginPath();//création de la voiture
canvas.moveTo(100,100);
canvas.lineTo(100,140);
canvas.lineTo(50,140);
canvas.lineTo(50,200);
canvas.lineTo(300,200);
canvas.lineTo(300,140);
canvas.lineTo(250,140);
canvas.lineTo(250,100);
canvas.closePath();
canvas.fillStyle = '#00b251';
canvas.fill();

canvas.beginPath();
canvas.strokeStyle = '#717171';
canvas.fillStyle = '#cdcdcd';
canvas.arc(70,235,35,0,Math.PI*2,true);
canvas.fill();
canvas.stroke();
canvas.beginPath();
canvas.arc(275,235,35,0,Math.PI*2,true);
canvas.fill();
canvas.stroke();
