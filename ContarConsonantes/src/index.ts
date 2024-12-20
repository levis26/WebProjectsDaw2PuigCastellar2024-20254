function contarConsonates() {
    let palabra : string = (document.getElementById('entrada')! as HTMLInputElement).value;
    let contador: number = 0;
    let consonantes: string[] = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

    for (let i = 0; i < palabra.length; i++) {
        if (consonantes.indexOf(palabra[i]) > -1) {
            contador++;
        }
    }

    console.log(contador);
}
