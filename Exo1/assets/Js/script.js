var myCanvas = document.getElementById('exo1Canvas')
var canvas = myCanvas.getContext('2d')

// Début du canvas //

canvas.beginPath(); //début de la base de la maison
canvas.moveTo(100,350); //début de la forme en position (100,350)
canvas.lineTo(300,350);
canvas.lineTo(300,150);
canvas.lineTo(100,150);
canvas.closePath();//fin de la maison.
canvas.fillStyle = '#a9d7e6'; //mise en place de la couleur de remplisage.
canvas.fill(); //remplisage du canvas.

canvas.beginPath(); //début de la base du toit
canvas.moveTo(200,50); //début de la forme en position (200,50)
canvas.lineTo(100,150);
canvas.lineTo(300,150);
canvas.closePath();//fin du toit
canvas.fillStyle = '#ce8539'; //mise en place de la couleur de remplisage.
canvas.fill(); //remplisage du canvas.


canvas.beginPath()//debut de la mise en place des fenetres et de la porte.
canvas.moveTo(130, 170);//création de la premiere fenettre.
canvas.lineTo(170,170);
canvas.lineTo(170,210);
canvas.lineTo(130,210);

canvas.moveTo(230,170);//déplacement du point pour crée la deuxieme fenetre.
canvas.lineTo(270,170);
canvas.lineTo(270,210);
canvas.lineTo(230,210);

canvas.moveTo(170,260);//déplacement du point pour crée la porte.
canvas.lineTo(230,260);
canvas.lineTo(230,350);
canvas.lineTo(170,350);
canvas.closePath();//fin de la mise en place des fenetres et de la porte.
canvas.fillStyle = '#c9c9c9'; //mise en place de la couleur de remplisage.
canvas.fill(); //remplisage du canvas.
