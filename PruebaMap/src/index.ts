class Cliente {
    private _nombre: string;
    private _apellido: string;
    private _dni: string;
    private _tarjeta: string;

    constructor(nombre: string, apellido: string, dni: string, tarjeta: string) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._dni = dni;
        this._tarjeta = tarjeta;
    }

    // Getters y setters
    getNombre(): string {
        return this._nombre;
    }

    setNombre(value: string) {
        this._nombre = value.trim();
    }

    getApellido(): string {
        return this._apellido;
    }

    setApellido(value: string) {
        this._apellido = value.trim();
    }

    getDni(): string {
        return this._dni;
    }

    setDni(value: string) {
        this._dni = value.trim();
    }

    getTarjeta(): string {
        return this._tarjeta;
    }

    setTarjeta(value: string) {
        this._tarjeta = value.trim();
    }
}

// Mapa para almacenar los clientes
const clientes: Map<string, Cliente> = new Map();

// Función para guardar un cliente
function guardarClientes(): void {
    // Obtener valores de los inputs
    const nombre = (document.getElementById("nombre") as HTMLInputElement).value.trim();
    const apellido = (document.getElementById("apellidos") as HTMLInputElement).value.trim();
    const dni = (document.getElementById("dni") as HTMLInputElement).value.trim();
    const tarjeta = (document.getElementById("tarjeta") as HTMLInputElement).value.trim();

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
    (document.getElementById("formularioClientes") as HTMLFormElement).reset();

    // Actualizar la lista mostrada
    mostrarClientes();
}

// Función para mostrar los clientes en pantalla
function mostrarClientes(): void {
    const listaClientes = document.getElementById("mostrarListaClientes") as HTMLUListElement;
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
    const botonGuardar = document.getElementById("guardar") as HTMLButtonElement;
    botonGuardar.addEventListener("click", guardarClientes);
});
