"use strict";
function ventasDeColores() {
    let cantidad = Number(document.getElementById('entrada').value);
    if (cantidad > 0 && cantidad != null) {
        for (let i = 0; i < cantidad; i++) {
            let ventana = window.open("", "", "width= 300px,height=300px");
            let color = (Math.floor(Math.random() * 16777215).toString(16));
            if (ventana) {
                ventana.document.write('<h1>Ventana Nº ' + (i + 1).toString() + '</h1>');
                ventana.document.write('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus tortor, congue eu sollicitudin nec, vulputate vel purus. Sed id lorem eros. Mauris viverra dapibus magna ut congue. Quisque et tortor vitae nisl sollicitudin suscipit vel in ante. Aliquam erat volutpat. In non quam eleifend ipsum molestie imperdiet vel sit amet massa. Donec sagittis euismod turpis, eget ultrices tortor bibendum ac. Praesent vehicula varius nunc, sed laoreet enim tincidunt nec.</p>');
                ventana.document.body.style.background = ('#' + color);
                ventana.document.close();
            }
        }
    }
    else {
        alert("Ingresa un valor válido.");
    }
}
