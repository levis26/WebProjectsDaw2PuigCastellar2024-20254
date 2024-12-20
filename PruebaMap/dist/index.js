"use strict";
class Cliente {
    constructor(nombre, apellido, dni, tarjeta) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._dni = dni;
        this._tarjeta = tarjeta;
    }
    // Getters y setters
    getNombre() {
        return this._nombre;
    }
    setNombre(value) {
        this._nombre = value.trim();
    }
    getApellido() {
        return this._apellido;
    }
    setApellido(value) {
        this._apellido = value.trim();
    }
    getDni() {
        return this._dni;
    }
    setDni(value) {
        this._dni = value.trim();
    }
    getTarjeta() {
        return this._tarjeta;
    }
    setTarjeta(value) {
        this._tarjeta = value.trim();
    }
}
// Mapa para almacenar los clientes
const clientes = new Map();
// Función para guardar un cliente
function guardarClientes() {
    // Obtener valores de los inputs
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellidos").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const tarjeta = document.getElementById("tarjeta").value.trim();
    // Validar que todos los campos estén llenos
    if (!nombre || !apellido || !dni || !tarjeta) {
        alert("Por favor, rellena todos los campos.");
        return;
    }
    // Validar que el cliente no esté duplicado (según DNI)
    if (clientes.has(dni)) {
        alert("El cliente con DNI: " + dni + ", ya está registrado.");
        return;
    }
    // Crear una instancia de Cliente y establecer propiedades con setters
    const nuevoCliente = new Cliente("", "", "", "");
    nuevoCliente.setNombre(nombre); // Usando setter
    nuevoCliente.setApellido(apellido); // Usando setter
    nuevoCliente.setDni(dni); // Usando setter
    nuevoCliente.setTarjeta(tarjeta); // Usando setter
    // Agregar al Map
    clientes.set(nuevoCliente.getDni(), nuevoCliente);
    // Limpiar el formulario
    document.getElementById("formularioClientes").reset();
    // Actualizar la lista mostrada
    mostrarClientes();
}
// Función para mostrar los clientes en pantalla
function mostrarClientes() {
    const listaClientes = document.getElementById("mostrarListaClientes");
    listaClientes.innerHTML = ""; // Limpiar contenido previo
    clientes.forEach((cliente) => {
        const li = document.createElement("li");
        // Usando getters para obtener valores
        li.textContent = `DNI: ${cliente.getDni()}, Nombre: ${cliente.getNombre()}, Apellidos: ${cliente.getApellido()}, Tarjeta: ${cliente.getTarjeta()}`;
        listaClientes.appendChild(li);
    });
}
// Asociar eventos después de que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const botonGuardar = document.getElementById("guardar");
    botonGuardar.addEventListener("click", guardarClientes);
});
