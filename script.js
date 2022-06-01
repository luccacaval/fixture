document.getElementById('Fecha_2').style.display = 'none';
document.getElementById('Fecha_3').style.display = 'none';
document.getElementById('table1').hidden = true;
document.getElementById('table2').hidden = true;
document.getElementById('table3').hidden = true;
document.getElementById('table4').hidden = true;
document.getElementById('table5').hidden = true;
document.getElementById('table6').hidden = true;
document.getElementById('table7').hidden = true;
document.getElementById('table8').hidden = true;

function mostrar(e) {
  document.getElementById('table1').hidden = true;
  document.getElementById('table2').hidden = true;
  document.getElementById('table3').hidden = true;
  document.getElementById('table4').hidden = true;
  document.getElementById('table5').hidden = true;
  document.getElementById('table6').hidden = true;
  document.getElementById('table7').hidden = true;
  document.getElementById('table8').hidden = true;
  console.log(e.target);
  console.log(e.target.dataset.tableid);
  let tableid = e.target.dataset.tableid;
  let table = document.getElementById(tableid);
  console.log(table);
  table.hidden = !table.hidden;
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
