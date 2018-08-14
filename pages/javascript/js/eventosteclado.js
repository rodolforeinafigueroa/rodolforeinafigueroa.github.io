var vObjCanvas = document.getElementById('objCanvas');
var vObjLienzo = vObjCanvas.getContext('2d');
var prvIntPosX = 150;
var prvIntPosY = 150;
dibujarLinea();

vObjLienzo.strokeStyle = "blue";

document.onkeyup = function(e) {
    //console.log(e.ctrlKey);
    //console.log(e.keyCode);
    var tecla;
    if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 )
    {
      tecla = e.keyCode;
      dibujarLinea(tecla);
    }
}

function dibujarLinea(codigoTecla){
  vObjLienzo.beginPath();
  vObjLienzo.moveTo(prvIntPosX, prvIntPosY);
  //console.log(codigoTecla);
  switch (codigoTecla){
    case 37:
      prvIntPosX = prvIntPosX - 10;
      break;
    case 38:
      prvIntPosY =   prvIntPosY - 10;
      break;
    case 39:
      prvIntPosX = prvIntPosX + 10;
      break;
    case 40:
      prvIntPosY = prvIntPosY + 10;
      break;
  }
  vObjLienzo.lineTo(prvIntPosX, prvIntPosY);
  vObjLienzo.stroke();
  vObjLienzo.closePath();
}