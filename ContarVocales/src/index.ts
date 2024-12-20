function contarVocales(){
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

}
