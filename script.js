// Saludo
console.log("¡Hola! Bienvenido a mi sitio web");

// Contador
const boton = document.getElementById("boton-contador");
const resultado = document.getElementById("contador");

let contador = 0;

// Conteo al presionar el botón.
if (boton && resultado) {
    boton.addEventListener("click", function () {
        contador++;
        resultado.textContent = contador;
    });
}

// Animar los títulos de las secciones
if (typeof AOS !== "undefined") {
    document.querySelectorAll(".seccion h2").forEach(function (titulo) {
        titulo.setAttribute("data-aos", "fade-up");
    });

    AOS.init({
        duration: 800,
        once: true,
        disable: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    });
}