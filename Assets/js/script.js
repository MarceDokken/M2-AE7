// script.js

document.addEventListener("DOMContentLoaded", function () {

    // === FUNCIONALIDAD 1: Editar perfil ===

    const botonEditar = document.getElementById("profile-card__edit");
    const nombre = document.querySelector(".profile-card__name");

    botonEditar.addEventListener("click", function (event) {
        event.preventDefault();
        const nuevoNombre = prompt("Introduce tu nuevo nombre:");
        if (nuevoNombre) {
            nombre.textContent = nuevoNombre;
        }
    });

    // === FUNCIONALIDAD 2 y 3: Aceptar/Rechazar solicitudes ===

    const solicitudesTitulo = document.querySelector(".connection-requests__title");
    const conexionesTitulo = document.querySelector(".connections__title");

    let solicitudesRestantes = document.querySelectorAll(".connection-requests__item").length;
    let conexionesActuales = 500;

    function actualizarContadores() {
        solicitudesTitulo.textContent = `Solicitudes de Conexión (${solicitudesRestantes})`;
        conexionesTitulo.textContent = `Tus Conexiones (${conexionesActuales})`;
    }

    const botonesAceptar = document.querySelectorAll(".connection-requests__button--accept");
    const botonesRechazar = document.querySelectorAll(".connection-requests__button--decline");

    botonesAceptar.forEach((boton) => {
        boton.addEventListener("click", function () {
            const item = boton.closest(".connection-requests__item");
            item.remove(); 
            solicitudesRestantes--;
            conexionesActuales++;
            actualizarContadores();
        });
    });

    botonesRechazar.forEach((boton) => {
        boton.addEventListener("click", function () {
            const item = boton.closest(".connection-requests__item");
            item.remove(); 
            solicitudesRestantes--;
            actualizarContadores();
        });
    });
    
    actualizarContadores();
});
