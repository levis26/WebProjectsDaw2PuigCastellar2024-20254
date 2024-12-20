"use strict";
function reversarPalabra() {
    let palabra = document.getElementById('entrada').value;
    let reversoDePalabra = '';
    for (let i = palabra.length - 1; i >= 0; i--) {
        reversoDePalabra += palabra[i].toString();
    }
    console.log(reversoDePalabra);
}
