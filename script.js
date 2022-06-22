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



function resultado(event) {
  event.preventDefault();
  let local = event.target.children[1].textContent;
  let visitante = event.target.children[4].textContent;
  console.log(local);
  console.log(visitante);
  let golesLocal = event.target.children[2].value;
  let golesVisitante = event.target.children[3].value;
  let grupo = event.target.parentElement.parentElement.classList
  let i_local = 0;
  let i_visitante = 0;
  let tabla = document.getElementsByClassName(grupo)[0];
  for (var i = 1; i < 4; i++) {
    if (tabla.rows[i].cells[1].textContent === local) {
      console.log(tabla.rows[i].cells[1].textContent);
      i_local = i;
      console.log("local = " + i);
    }
  }

  for (var j = 1; j <= 4; j++) {
    if (tabla.rows[j].cells[1].textContent == visitante) {
      i_visitante = j;
      console.log("visitante = " + j);
    }
  }


  if (golesLocal < golesVisitante) {
    console.log("gana " + visitante);
  }
  if (golesLocal > golesVisitante) {
    console.log("gana " + local);
  }
  if (golesLocal == golesVisitante) {
    console.log("Empate");
  }

}
