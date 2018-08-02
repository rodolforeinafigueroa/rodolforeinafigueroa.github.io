var vObjCanvas = document.getElementById('dibujo');
var vObjLienzo = vObjCanvas.getContext('2d');

for (var i = 0; i< 300;i = i +10 )
{
  dibujarLinea('blue', 0, i, i + 10, 300);
  dibujarLinea('red', i, 0, 300, i + 10);
  dibujarLinea('green', i, 300, 300, 300 - (i + 10));
  dibujarLinea('yellow', 300 - i, 0, 0, i + 10);
}

function dibujarLinea(color, inicioX, inicioY, finX, finY)
{
  vObjLienzo.beginPath();
  vObjLienzo.strokeStyle = color;
  vObjLienzo.moveTo(inicioX, inicioY);
  vObjLienzo.lineTo(finX, finY);
  vObjLienzo.stroke();
  vObjLienzo.closePath();
}
