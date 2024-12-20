/*function contarVocales(){
   let palabra : string = (<HTMLInputElement>document.getElementById('entrada')!).value;
   let contador: number = 0;
   let vocales: string[] = ['a','e','i','o','u'];

    let palabraLeida: string[] = palabra.toLowerCase().split('');

    for (let i = 0; i < palabraLeida.length; i++) {
      if (vocales.includes(palabraLeida[i])){
        contador++;
      }
    }
  console.log(contador);

}*/

/*let visites_maximas: number = 2;
const nom_pagina: string = "webPuig"
let comptador:number = 0;
var missatge_benvinguda: string = "Benvingut a la meva casa.";

comptador++;
if (comptador > visites_maximas){
    missatge_benvinguda = "Has superat el nombre de visites permitits."
}
console.log(missatge_benvinguda)

comptador++;
if (comptador > visites_maximas){
    missatge_benvinguda = "Has superat el nombre de visites permitits."
}
console.log(missatge_benvinguda)

comptador++;
if (comptador > visites_maximas){
    missatge_benvinguda = "Has superat el nombre de visites permitits."
}
console.log(missatge_benvinguda)*/


let visites_maximas: number = 2;
const nom_pagina: string = "webPuig"
let comptador:number = 0;
var missatge_benvinguda: string = "Benvingut a la meva casa.";

do {
    console.log(missatge_benvinguda)
}while (comptador > visites_maximas)