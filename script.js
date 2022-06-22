hidfech();
hidgrup();
hidllaves();
function faseDeG() {
  hidllaves();
  hidgrup();
  let grupos = document.getElementById('grupiño')
  grupos.hidden = !grupos.hidden;
}

function cuartos() {
  hidllaves();
  hidgrup();
  // let cuartos = document.getElementById('Cuartos')
  // cuartos.hidden = !cuartos.hidden;
}
function semi() {
  hidllaves();
  hidgrup();
  // let semi = document.getElementById('semi')
  // semi.hidden = !semi.hidden;
}

function final() {
  hidllaves();
  hidgrup();
  // let final = document.getElementById('Final')
  // final.hidden = !final.hidden;
}

function mostrar(e) {
  let tableid;
  hidgrup();
  hidfech();
  tableid = e.target.dataset.tableid;
  let table = document.getElementById(tableid);
  table.hidden = !table.hidden;
}

function Mostrar_Fecha_1() {
  hidfech();
  if (tableid == "table1") {
    document.getElementById('Fecha_1t1').hidden = !document.getElementById('Fecha_1t1').hidden;
  }
  if (tableid == "table2") {
    document.getElementById('Fecha_1t2').hidden = !document.getElementById('Fecha_1t2').hidden;
  }
  if (tableid == "table3") {
    document.getElementById('Fecha_1t3').hidden = !document.getElementById('Fecha_1t3').hidden;
  }
}
function Mostrar_Fecha_2() {
  hidfech();
  if (tableid == "table1") {
    document.getElementById('Fecha_2t1').hidden = !document.getElementById('Fecha_2t1').hidden;
  }
  if (tableid == "table2") {
    document.getElementById('Fecha_2t2').hidden = !document.getElementById('Fecha_2t2').hidden;
  }
  if (tableid == "table3") {
    document.getElementById('Fecha_2t3').hidden = !document.getElementById('Fecha_2t3').hidden;
  }
}
function Mostrar_Fecha_3() {
  hidfech();
  if (tableid == "table1") {
    document.getElementById('Fecha_3t1').hidden = !document.getElementById('Fecha_3t1').hidden;
  }
  if (tableid == "table2") {
    document.getElementById('Fecha_3t2').hidden = !document.getElementById('Fecha_3t2').hidden;
  }
  if (tableid == "table3") {
    document.getElementById('Fecha_3t3').hidden = !document.getElementById('Fecha_3t3').hidden;
  }
}


function hidgrup() {
  for (var i = 1; i < 9; i++) {
    document.getElementById(`table${i}`).hidden = true;
  }
}
function hidfech() {
   for (var l = 1; l <= 3; l++) {
     for (var m = 1; m <= 3; m++) {
       document.getElementById(`Fecha_${m}t${l}`).hidden = true;
     }
  }

}
function hidllaves() {
  document.getElementById('grupiño').hidden = true;

}
function hidall() {
  hidgrup();
  hidfech();
  hidllaves();
}
