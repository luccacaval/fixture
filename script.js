hidfech();
hidgrup();

let tableid;
function mostrar(e) {
  hidgrup();
  hidfech();
  tableid = e.target.dataset.tableid;
  let table = document.getElementById(tableid);
  table.hidden = !table.hidden;
}

function Mostrar_Fecha_1() {
  hidfech();
  if (tableid == "table1") {
    document.getElementById('Fecha_1t1').style.display = 'block';

  }
}
function Mostrar_Fecha_2() {
  hidfech();
  if (tableid == "table1") {
    document.getElementById('Fecha_2t1').style.display = 'block';


  }
}
function Mostrar_Fecha_3() {
  hidfech();
  if (tableid == "table1") {
    document.getElementById('Fecha_3t1').style.display = 'block';

  }
}
function hidfech() {
  document.getElementById('Fecha_1t1').style.display = 'none';
  document.getElementById('Fecha_2t1').style.display = 'none';
  document.getElementById('Fecha_3t1').style.display = 'none';

}
function hidgrup() {
  document.getElementById('table1').hidden = true;
  document.getElementById('table2').hidden = true;
  document.getElementById('table3').hidden = true;
  document.getElementById('table4').hidden = true;
  document.getElementById('table5').hidden = true;
  document.getElementById('table6').hidden = true;
  document.getElementById('table7').hidden = true;
  document.getElementById('table8').hidden = true;

}
