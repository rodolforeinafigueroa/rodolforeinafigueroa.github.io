var vBtnCalcular = document.getElementById('btnCalcular');

vBtnCalcular.addEventListener("click", calcularEdad);

function calcularEdad()
{
  var vYearNacimiento = document.getElementById('numYearNacimiento');
  var vEdad = 2020 - vYearNacimiento.value;

  var vResultado = document.getElementById('resultado');
  vResultado.innerHTML = 'Su edad en el 2020 sera de: <strong>' + vEdad + '</strong> años.';
}
