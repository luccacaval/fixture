hidfech();
hidgrup();
hidlist();
hidkey();

let tableid;

function mostrar(e) {
    hidgrup();
    hidfech();
    tableid = e.target.dataset.tableid;
    let table = document.getElementById(tableid);
    table.hidden = !table.hidden;
}

function fasedeg() {
    hidkey();
    hidgrup();
    hidfech();
    let x = document.getElementById('nene')
    x.hidden = !x.hidden
}

function octavos() {
    hidkey();
    hidlist();
    hidgrup();
    hidfech();
    let x = document.getElementById('octavos')
    x.hidden = !x.hidden
}

function cuartos() {
    hidkey();
    hidlist();
    hidgrup();
    hidfech();
    let x = document.getElementById('cuartos')
    x.hidden = !x.hidden
}

function semi() {
    hidkey();
    hidlist();
    hidgrup();
    hidfech();
    let x = document.getElementById('semi')
    x.hidden = !x.hidden
}

function final() {
    hidkey();
    hidlist();
    hidgrup();
    hidfech();
    let x = document.getElementById('final')
    x.hidden = !x.hidden
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
    grupos.hidden = true
}

function hidkey() {
    let x1 = document.getElementById('octavos')
    x1.hidden = true
    let x2 = document.getElementById('cuartos')
    x2.hidden = true
    let x3 = document.getElementById('semi')
    x3.hidden = true
    let x4 = document.getElementById('final')
    x4.hidden = true
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

    let primero = 0
    let segundo = 0
    let tempo = 0
    let tempo_i = 0
    let primero_i = 0
    let segundo_i = 0

let partido_octavos1 = document.getElementsByClassName('partido_octavos1')
let partido_octavos2 = document.getElementsByClassName('partido_octavos2')
let partido_octavos3 = document.getElementsByClassName('partido_octavos3')
let partido_octavos4 = document.getElementsByClassName('partido_octavos4')
let partido_octavos5 = document.getElementsByClassName('partido_octavos5')
let partido_octavos6 = document.getElementsByClassName('partido_octavos6')
let partido_octavos7 = document.getElementsByClassName('partido_octavos7')
let partido_octavos8 = document.getElementsByClassName('partido_octavos8')


    if (parseInt(tabla.rows[1].cells[3].textContent) + parseInt(tabla.rows[2].cells[3].textContent) + parseInt(tabla.rows[3].cells[3].textContent) + parseInt(tabla.rows[4].cells[3].textContent) == 12) {
        for (let i = 1; i <= 4; i++) {
            if (segundo < parseInt(tabla.rows[i].cells[2].textContent)) {
                segundo = parseInt(tabla.rows[i].cells[2].textContent)
                segundo_i = i
            }
            if (segundo > primero) {
                tempo = primero
                tempo_i = primero_i
                primero = segundo
                primero_i = segundo_i
                segundo = tempo
                segundo_i = tempo_i
            }
        }
        if (grupo == "Grupo_1") {
            partido_octavos1.children[1].textContent = tabla.rows[primero_i].cells[1].textContent
            partido_octavos5.children[4].textContent = tabla.rows[segundo_i].cells[1].textContent
        }
        if (grupo == "Grupo_2") {
            partido_octavos5.children[1].textContent = tabla.rows[primero_i].cells[1].textContent
            partido_octavos1.children[4].textContent = tabla.rows[segundo_i].cells[1].textContent
        }
        if (grupo == "Grupo_3") {
          partido_octavos2.children[1].textContent = tabla.rows[primero_i].cells[1].textContent
          partido_octavos6.children[4].textContent = tabla.rows[segundo_i].cells[1].textContent
        }
        if (grupo == "Grupo_4") {
        partido_octavos6.children[1].textContent = tabla.rows[primero_i].cells[1].textContent
        partido_octavos2.children[4].textContent = tabla.rows[segundo_i].cells[1].textContent
        }
        if (grupo == "Grupo_5") {
          partido_octavos3.children[1].textContent = tabla.rows[primero_i].cells[1].textContent
          partido_octavos7.children[4].textContent = tabla.rows[segundo_i].cells[1].textContent
        }
        if (grupo == "Grupo_6") {
          partido_octavos7.children[1].textContent = tabla.rows[primero_i].cells[1].textContent
          partido_octavos3.children[4].textContent = tabla.rows[segundo_i].cells[1].textContent
        }
        if (grupo == "Grupo_7") {
          partido_octavos4.children[1].textContent = tabla.rows[primero_i].cells[1].textContent
          partido_octavos8.children[4].textContent = tabla.rows[segundo_i].cells[1].textContent
        }
        if (grupo == "Grupo_8") {
          partido_octavos8.children[1].textContent = tabla.rows[primero_i].cells[1].textContent
          partido_octavos4.children[4].textContent = tabla.rows[segundo_i].cells[1].textContent
        }
    }


}
function resultadollave(event) {
  event.preventDefault();
  let partido = event.target.classList
  let espacio = document.getElementsByClassName(partido)[1];
if (parseInt(event.target.children[2].value) < parseInt(event.target.children[3].value)) {
  espacio.textContent = event.target.children[1].textContent;
}

if (parseInt(event.target.children[2].value) > parseInt(event.target.children[3].value)) {
  espacio.textContent = event.target.children[1].textContent;
}
}

function resultadoFinal(event) {
  event.preventDefault();
  if (parseInt(event.target.children[2].value) < parseInt(event.target.children[3].value)) {
    event.target.children[6].textContent += event.target.children[4].textContent
  }
  
  if (parseInt(event.target.children[2].value) > parseInt(event.target.children[3].value)) {
    event.target.children[6].textContent += event.target.children[1].textContent
  }
}
