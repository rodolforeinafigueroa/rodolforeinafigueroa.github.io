var vObjCanvas = document.getElementById('dibujo');
var vObjLienzo = vObjCanvas.getContext('2d');
var vNumLineas = document.getElementById('numLineas');
var vBtnAceptar = document.getElementById('btnAceptar');

vBtnAceptar.addEventListener("click", dibujoPorClick);

function pintarCanvas(pvNumLineas)
{
  limpiarCanvas();
  for (var i = 0; i< pvNumLineas * 10;i = i + 10 )
  {
    dibujarLinea('blue', 0, i, i + 10, 300);
    dibujarLinea('red', i, 0, 300, i + 10);
    dibujarLinea('green', i, 300, 300, 300 - (i + 10));
    dibujarLinea('yellow', 300 - i, 0, 0, i + 10);
  }
}

function dibujoPorClick()
{
  if (vNumLineas.value > 0 && vNumLineas.value <= 30)
  {
    pintarCanvas(vNumLineas.value);
  }
  else
  {
      alert('El valor ingresado no es valido.');
  }
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

function limpiarCanvas()
{
    vObjLienzo.clearRect(0, 0, vObjCanvas.width, vObjCanvas.height);
}
