function esPalindrome() {
    let palabra : string = (<HTMLInputElement>document.getElementById('entrada')!).value;
    let esPalindromo: boolean = false;
    let reversoPalabra : string = '';

    for (let i = palabra.length - 1; i >= 0 ; i--) {
        reversoPalabra += palabra[i].toString();
    }

    if (palabra == reversoPalabra) {
        esPalindromo = true;
    }

    console.log(esPalindromo);
}
