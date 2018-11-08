var myCanvas = document.getElementById('exo2Canvas')
var canvas = myCanvas.getContext('2d')

 //début du Canvas

canvas.save();
canvas.translate(150,50);
canvas.fillStyle = '#ce8539'; //mise en place de la couleur de remplisage.
canvas.rotate((Math.PI/180)*45);//rotation de l'element a partir de la position 0,0
canvas.fillRect(0,0,150,150);//création d'un carré pour le toit (carré car hauteur = largeur)

canvas.restore();
canvas.fillStyle = '#a9d7e6'; //mise en place de la couleur de remplisage.
canvas.fillRect(44,155,212,212);


canvas.fillStyle = '#c9c9c9'
canvas.fillRect(64,175,40,40)
canvas.fillRect(192,175,40,40)
canvas.fillRect(114,277,70,90)
