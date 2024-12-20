"use strict";
function comprobarFecha() {
    let fecha = document.getElementById('entrada').value.trim();
    const patron = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/;
    if (!patron.test(fecha)) {
        console.log('Fecha invalida.');
        return;
    }
    else {
        console.log('Fecha valida.');
    }
    //Creem una variable string amb aquesta informació i separem les diverses parts utilitzant el substring
    const fragments = fecha;
    const dia = parseInt(fragments.substring(0, 2));
    const mes = parseInt(fragments.substring(3, 5)) - 1; // Els mesos amb JavaScript van de 0 a 11
    const any = parseInt(fragments.substring(6, 10));
    //Creem un objecte Date amb cada una d'aquestes parts i obtenim el dia numeric de la setmana
    const dataObj = new Date(any, mes, dia);
    const diaNumeric = dataObj.getDay();
    alert(diaNumeric);
    //Un altre opció hagués estat crear una array per saber quin dia de la setmana era amb nom
    //const dies = ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'];
    //alert(dies[dataObj.getDay()]);
}
