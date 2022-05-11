document.getElementById('Fecha_2').style.display = 'none';
document.getElementById('Fecha_3').style.display = 'none';
document.getElementById('Grupo_2').style.display = 'none';

function Mostrar_Grupo_1() {
  document.getElementById('Grupo_1').style.display ='block';
  document.getElementById('Grupo_2').style.display = 'none';
}

function Mostrar_Grupo_2() {
  document.getElementById('Grupo_1').style.display ='none';
  document.getElementById('Grupo_2').style.display = 'block';
}

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

function Mostrar_Fecha_1_G2() {
  document.getElementById('Fecha_1_G2').style.display = 'block';
  document.getElementById('Fecha_2_G2').style.display = 'none';
  document.getElementById('Fecha_3_G2').style.display = 'none';
}
function Mostrar_Fecha_2_G2() {
    document.getElementById('Fecha_1_G2').style.display = 'none';
    document.getElementById('Fecha_2_G2').style.display = 'block';
    document.getElementById('Fecha_3_G2').style.display = 'none';
}
function Mostrar_Fecha_3_G2() {
    document.getElementById('Fecha_1_G2').style.display = 'none';
    document.getElementById('Fecha_2_G2').style.display = 'none';
    document.getElementById('Fecha_3_G2').style.display = 'block';
}
