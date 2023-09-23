// Función para cambiar el texto del botón
function cambiarTexto() {
    var boton = document.getElementById("boton");
    if (boton.textContent === "Hola mundo") {
        boton.textContent = "Adiós mundo";
    } else {
        boton.textContent = "Hola mundo";
    }
}
