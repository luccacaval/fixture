document.getElementById('Fecha_2').style.display = 'none';
document.getElementById('Fecha_3').style.display = 'none';

function Mostrar_Fecha_1() {
  document.getElementById('Fecha_1').style.display = 'block';
  document.getElementById('Fecha_2').style.display = 'none';
  document.getElementById('Fecha_3').style.display = 'none';
}
function Mostrar_Fecha_2() {
    document.getElementById('Fecha_1').style.display = 'none';
    document.getElementById('Fecha_2').style.display = 'block';
    document.getElementById('Fecha_3').style.display = 'none';
}
function Mostrar_Fecha_3() {
    document.getElementById('Fecha_1').style.display = 'none';
    document.getElementById('Fecha_2').style.display = 'none';
    document.getElementById('Fecha_3').style.display = 'block';
}
