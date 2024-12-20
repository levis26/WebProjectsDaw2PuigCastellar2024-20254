"use strict";
function contarVocales() {
    let palabra = document.getElementById('entrada').value;
    let contador = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let palabraLeida = palabra.toLowerCase().split('');
    for (let i = 0; i < palabraLeida.length; i++) {
        if (vocales.includes(palabraLeida[i])) {
            contador++;
        }
    }
    console.log(contador);
}
