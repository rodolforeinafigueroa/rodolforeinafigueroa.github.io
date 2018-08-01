var objCanvas = document.getElementById('dibujo');
var objLienzo = objCanvas.getContext("2d");

objLienzo.beginPath();
objLienzo.strokeStyle = "red";
objLienzo.moveTo(100, 100);
objLienzo.lineTo(200, 200);
objLienzo.stroke();
objLienzo.closePath();

objLienzo.beginPath();
objLienzo.strokeStyle = "blue";
objLienzo.moveTo(100, 300);
objLienzo.lineTo(280, 50);
objLienzo.stroke();
objLienzo.closePath();
