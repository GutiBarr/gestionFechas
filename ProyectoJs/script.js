
//let fechaConcreta = prompt("Ingresa la fecha para empezar la cuenta atras! Formato MM/DD/AAAA: ");
//let evento = prompt("Dime que evento ocurrira en esa fecha: ");
let fechaConcreta;
let evento;
let intervalo;

function mostrarContador(){
let fechaLimite = new Date(fechaConcreta);
let fechaActual = new Date();

//console.log(fechaLimite);
//console.log(fechaActual);

let getLimite = fechaLimite.getTime();
let getActual = fechaActual.getTime();

//console.log(getLimite);
//console.log(getActual);

let resultado = getLimite - getActual;
//console.log(resultado);

let dias = Math.floor(resultado / (1000 * 60 * 60 * 24));
let horas = Math.floor((resultado / (1000 * 60 * 60)) % 24);
let minutos = Math.floor((resultado / (1000 * 60)) % 60);
let segundos = Math.floor((resultado / 1000) % 60);

minutos = String(minutos).padStart(2, '0');
segundos = String(segundos).padStart(2, '0');

if (resultado <= 0) {
    clearInterval(intervalo);
    document.getElementById('contador').textContent = evento;
    return;
} else if (resultado <= 604800000) { 
    document.getElementById('contador').style.color = 'red';
} else if (resultado <= 2629800000) { 
    document.getElementById('contador').style.color = 'orange';
} else {
    document.getElementById('contador').style.color = 'green';
}

let resultadoFinal = ("Hola, quedan "+ dias +  " dias y " + horas + ":" + minutos + ":" + segundos + " para " + evento);
console.log(resultadoFinal);
document.getElementById('contador').textContent = resultadoFinal;
};



document.getElementById('button').addEventListener('click', () => {
      const inputFecha = document.getElementById('fecha').value;
      const inputEvento = document.getElementById('evento').value.trim();

      if (!inputFecha || !inputEvento) {
        alert('Por favor, introduce una fecha y un evento');
        return;
      }

      fechaConcreta = inputFecha;
      evento = inputEvento;

      clearInterval(intervalo);
      mostrarContador();
      intervalo = setInterval(mostrarContador, 1000);
    });

