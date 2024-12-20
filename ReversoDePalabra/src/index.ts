function reversarPalabra(){
let palabra : string = (document.getElementById('entrada')! as HTMLInputElement).value;
let reversoDePalabra: string = '';
    for (let i = palabra.length -1; i >= 0; i--) {
        reversoDePalabra += palabra[i].toString();
    }
    console.log(reversoDePalabra);
}