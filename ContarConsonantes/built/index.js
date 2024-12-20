"use strict";
function contarConsonates() {
    let palabra = document.getElementById('entrada').value;
    let contador = 0;
    let consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < palabra.length; i++) {
        if (consonantes.indexOf(palabra[i]) > -1) {
            contador++;
        }
    }
    console.log(contador);
}
