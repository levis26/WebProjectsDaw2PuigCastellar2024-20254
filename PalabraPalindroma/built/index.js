"use strict";
function esPalindrome() {
    let palabra = document.getElementById('entrada').value;
    let esPalindromo = false;
    let reversoPalabra = '';
    for (let i = palabra.length - 1; i >= 0; i--) {
        reversoPalabra += palabra[i].toString();
    }
    if (palabra == reversoPalabra) {
        esPalindromo = true;
    }
    console.log(esPalindromo);
}
