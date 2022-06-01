function show(e) {
  console.log(e.target.dataset.group);
  let div = document.querySelector('.' + e.target.dataset.group);
  console.log(div);
  div.hidden = !div.hidden;
  let fechas1 = document.querySelectorAll('.Fecha_1');
  let fechas2 = document.querySelectorAll('.Fecha_2');
  let fechas3 = document.querySelectorAll('.Fecha_3');
  for (let divs of fechas1) {
    fechas1.hidden = true
  }
}

function Mostrar_Fecha_1() {
  let fechas = document.querySelectorAll('.Fecha_1');
  for (let div  of fechas) {
    if (document.parentElement.hidden == false){
      fechas.hidden = false
    }
}
