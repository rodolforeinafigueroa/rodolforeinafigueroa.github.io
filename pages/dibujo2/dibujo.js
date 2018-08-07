var vObjCanvas = document.getElementById('dibujo');
var vObjLienzo = vObjCanvas.getContext('2d');
var vNumLineas = document.getElementById('numLineas');
var vBtnAceptar = document.getElementById('btnAceptar');
var vLngAnchoCanvas = vObjCanvas.width;

vBtnAceptar.addEventListener("click", dibujoPorClick);

function pintarCanvas(pvNumLineas)
{
  limpiarCanvas();
  var espaciado = vLngAnchoCanvas / pvNumLineas;

  for (var i = 0; i< pvNumLineas * espaciado;i = i + espaciado )
  {
    dibujarLinea('blue', 0, i, i + espaciado, vLngAnchoCanvas);
    dibujarLinea('red', i, 0, vLngAnchoCanvas, i + espaciado);
    dibujarLinea('green', i, vLngAnchoCanvas, vLngAnchoCanvas, vLngAnchoCanvas - (i + espaciado));
    dibujarLinea('yellow', vLngAnchoCanvas - i, 0, 0, i + espaciado);
  }
}

function dibujoPorClick()
{
  if (vNumLineas.value > 0 && vNumLineas.value <= 300)
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
