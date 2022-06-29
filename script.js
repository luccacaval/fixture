hidfech();
hidgrup();
hidlist();

let tableid;
function mostrar(e) {
  hidgrup();
  hidfech();
  tableid = e.target.dataset.tableid;
  let table = document.getElementById(tableid);
  table.hidden = !table.hidden;
}

function fasedeg() {
  let grupos = document.getElementById('nene')
  grupos.hidden = !grupos.hidden
}

function llaves() {
    let grupos = document.getElementById('multillave')
    grupos.hidden = !grupos.hidden

}

function Mostrar_Fecha_1() {
  hidfech();
  if (tableid == "table1") {
    document.getElementById('Fecha_1t1').style.display = 'block';
  }
  if (tableid == "table2") {
    document.getElementById('Fecha_1t2').style.display = 'block';
  }
  if (tableid == "table3") {
    document.getElementById('Fecha_1t3').style.display = 'block';
  }
  if (tableid == "table4") {
    document.getElementById('Fecha_1t4').style.display = 'block';
  }
  if (tableid == "table5") {
    document.getElementById('Fecha_1t5').style.display = 'block';
  }
  if (tableid == "table6") {
    document.getElementById('Fecha_1t6').style.display = 'block';
  }
  if (tableid == "table7") {
    document.getElementById('Fecha_1t7').style.display = 'block';
  }
  if (tableid == "table8") {
    document.getElementById('Fecha_1t8').style.display = 'block';
  }
}
function Mostrar_Fecha_2() {
  hidfech();
  if (tableid == "table1") {
    document.getElementById('Fecha_2t1').style.display = 'block';
  }
  if (tableid == "table2") {
    document.getElementById('Fecha_2t2').style.display = 'block';
  }
  if (tableid == "table3") {
    document.getElementById('Fecha_2t3').style.display = 'block';
  }
  if (tableid == "table4") {
    document.getElementById('Fecha_2t4').style.display = 'block';
  }
  if (tableid == "table5") {
    document.getElementById('Fecha_2t5').style.display = 'block';
  }
  if (tableid == "table6") {
    document.getElementById('Fecha_2t6').style.display = 'block';
  }
  if (tableid == "table7") {
    document.getElementById('Fecha_2t7').style.display = 'block';
  }
  if (tableid == "table8") {
    document.getElementById('Fecha_2t8').style.display = 'block';
  }
}
function Mostrar_Fecha_3() {
  hidfech();
  if (tableid == "table1") {
    document.getElementById('Fecha_3t1').style.display = 'block';
  }
  if (tableid == "table2") {
    document.getElementById('Fecha_3t2').style.display = 'block';
  }
  if (tableid == "table3") {
    document.getElementById('Fecha_3t3').style.display = 'block';
  }
  if (tableid == "table4") {
    document.getElementById('Fecha_3t4').style.display = 'block';
  }
  if (tableid == "table5") {
    document.getElementById('Fecha_3t5').style.display = 'block';
  }
  if (tableid == "table6") {
    document.getElementById('Fecha_3t6').style.display = 'block';
  }
  if (tableid == "table7") {
    document.getElementById('Fecha_3t7').style.display = 'block';
  }
  if (tableid == "table8") {
    document.getElementById('Fecha_3t8').style.display = 'block';
  }
}
function hidfech() {
  document.getElementById('Fecha_1t1').style.display = 'none';
  document.getElementById('Fecha_2t1').style.display = 'none';
  document.getElementById('Fecha_3t1').style.display = 'none';
  document.getElementById('Fecha_1t2').style.display = 'none';
  document.getElementById('Fecha_2t2').style.display = 'none';
  document.getElementById('Fecha_3t2').style.display = 'none';
  document.getElementById('Fecha_1t3').style.display = 'none';
  document.getElementById('Fecha_2t3').style.display = 'none';
  document.getElementById('Fecha_3t3').style.display = 'none';
  document.getElementById('Fecha_1t4').style.display = 'none';
  document.getElementById('Fecha_2t4').style.display = 'none';
  document.getElementById('Fecha_3t4').style.display = 'none';
  document.getElementById('Fecha_1t5').style.display = 'none';
  document.getElementById('Fecha_2t5').style.display = 'none';
  document.getElementById('Fecha_3t5').style.display = 'none';
  document.getElementById('Fecha_1t6').style.display = 'none';
  document.getElementById('Fecha_2t6').style.display = 'none';
  document.getElementById('Fecha_3t6').style.display = 'none';
  document.getElementById('Fecha_1t7').style.display = 'none';
  document.getElementById('Fecha_2t7').style.display = 'none';
  document.getElementById('Fecha_3t7').style.display = 'none';
  document.getElementById('Fecha_1t8').style.display = 'none';
  document.getElementById('Fecha_2t8').style.display = 'none';
  document.getElementById('Fecha_3t8').style.display = 'none';
}
function hidlist() {
  let grupos = document.getElementById('nene')
  let llaves = document.getElementById('multillave')
  grupos.hidden = true
  llaves.hidden = true
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



function resultado(event) {
  event.preventDefault();
  let local = event.target.children[1].textContent;
  let visitante = event.target.children[4].textContent;
  let golesLocal = parseInt(event.target.children[2].value);
  let golesVisitante = parseInt(event.target.children[3].value);
  let grupo = event.target.parentElement.parentElement.classList
  let i_local = 0;
  let i_visitante = 0;
  let tabla = document.getElementsByClassName(grupo)[0];
  for (var i = 1; i <= 4; i++) {
    if (tabla.rows[i].cells[1].textContent === local) {
      i_local = i;
    }
  }

  for (var j = 1; j <= 4; j++) {
    if (tabla.rows[j].cells[1].textContent == visitante) {
      i_visitante = j
    }
  }


  if (golesLocal < golesVisitante) {
    tabla.rows[i_visitante].cells[2].textContent = parseInt(tabla.rows[i_visitante].cells[2].textContent) + 3
    tabla.rows[i_visitante].cells[3].textContent = parseInt(tabla.rows[i_visitante].cells[3].textContent) + 1
    tabla.rows[i_visitante].cells[4].textContent = parseInt(tabla.rows[i_visitante].cells[4].textContent) + 1
    tabla.rows[i_visitante].cells[7].textContent = parseInt(tabla.rows[i_visitante].cells[7].textContent) + golesVisitante
    tabla.rows[i_visitante].cells[8].textContent = parseInt(tabla.rows[i_visitante].cells[8].textContent) + golesLocal
    tabla.rows[i_local].cells[2].textContent = parseInt(tabla.rows[i_local].cells[2].textContent) + 1
    tabla.rows[i_local].cells[3].textContent = parseInt(tabla.rows[i_local].cells[3].textContent) + 1
    tabla.rows[i_local].cells[5].textContent = parseInt(tabla.rows[i_local].cells[6].textContent) + 1
    tabla.rows[i_local].cells[7].textContent = parseInt(tabla.rows[i_local].cells[7].textContent) + golesLocal
    tabla.rows[i_local].cells[8].textContent = parseInt(tabla.rows[i_local].cells[8].textContent) + golesVisitante
  }
  if (golesLocal > golesVisitante) {
    tabla.rows[i_local].cells[2].textContent = parseInt(tabla.rows[i_local].cells[2].textContent) + 3
    tabla.rows[i_local].cells[3].textContent = parseInt(tabla.rows[i_local].cells[3].textContent) + 1
    tabla.rows[i_local].cells[4].textContent = parseInt(tabla.rows[i_local].cells[4].textContent) + 1
    tabla.rows[i_local].cells[7].textContent = parseInt(tabla.rows[i_local].cells[7].textContent) + golesLocal
    tabla.rows[i_local].cells[8].textContent = parseInt(tabla.rows[i_local].cells[8].textContent) + golesVisitante
    tabla.rows[i_visitante].cells[2].textContent = parseInt(tabla.rows[i_visitante].cells[2].textContent) + 1
    tabla.rows[i_visitante].cells[3].textContent = parseInt(tabla.rows[i_visitante].cells[3].textContent) + 1
    tabla.rows[i_visitante].cells[5].textContent = parseInt(tabla.rows[i_visitante].cells[6].textContent) + 1
    tabla.rows[i_visitante].cells[7].textContent = parseInt(tabla.rows[i_visitante].cells[7].textContent) + golesVisitante
    tabla.rows[i_visitante].cells[8].textContent = parseInt(tabla.rows[i_visitante].cells[8].textContent) + golesLocal
  }
  if (golesLocal == golesVisitante) {
    tabla.rows[i_visitante].cells[2].textContent = parseInt(tabla.rows[i_visitante].cells[2].textContent) + 1
    tabla.rows[i_local].cells[2].textContent = parseInt(tabla.rows[i_local].cells[2].textContent) + 1
    tabla.rows[i_visitante].cells[3].textContent = parseInt(tabla.rows[i_visitante].cells[3].textContent) + 1
    tabla.rows[i_local].cells[3].textContent = parseInt(tabla.rows[i_local].cells[3].textContent) + 1
    tabla.rows[i_visitante].cells[5].textContent = parseInt(tabla.rows[i_visitante].cells[5].textContent) + 1
    tabla.rows[i_local].cells[5].textContent = parseInt(tabla.rows[i_local].cells[5].textContent) + 1
    tabla.rows[i_visitante].cells[7].textContent = parseInt(tabla.rows[i_visitante].cells[7].textContent) + golesVisitante
    tabla.rows[i_visitante].cells[8].textContent = parseInt(tabla.rows[i_visitante].cells[8].textContent) + golesLocal
    tabla.rows[i_local].cells[7].textContent = parseInt(tabla.rows[i_local].cells[7].textContent) + golesLocal
    tabla.rows[i_local].cells[8].textContent = parseInt(tabla.rows[i_local].cells[8].textContent) + golesVisitante
  }
  event.target.children[5].hidden = true


  }
