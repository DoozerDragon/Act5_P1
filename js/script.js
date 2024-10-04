// Variables para obtener elementos de la página
const temaSelect = document.getElementById("tema");
const colorFondoInput = document.getElementById("color-fondo");
const nombreInput = document.getElementById("nombre");
const tituloInput = document.getElementById("titulo");
const mensajeInput = document.getElementById("mensaje");

const tituloPreview = document.getElementById("titulo-preview");
const nombrePreview = document.getElementById("nombre-preview");
const mensajePreview = document.getElementById("mensaje-preview");
const tarjetaPreview = document.getElementById("tarjeta-preview");
const imagenPreview = document.getElementById("imagen-preview");

// Conjuntos de imágenes por tema
const imagenesCumple = ["cumple1.png", "cumple2.png", "cumple3.png"];
const imagenesNavidad = ["navidad1.png", "navidad2.png", "navidad3.png"];
const imagenesSanValentin = ["sanvalentin1.png", "sanvalentin2.png", "sanvalentin3.png"];

// Cambiar el conjunto de imágenes según el tema seleccionado
temaSelect.addEventListener("change", function() {
    const tema = temaSelect.value;
    let imagenes = [];

    // Limpiar el contenedor de imágenes antes de agregar nuevas
    const contenedorImagenes = document.querySelector(".imagenes");
    while (contenedorImagenes.firstChild) {
        contenedorImagenes.removeChild(contenedorImagenes.firstChild);
    }

    // Seleccionar el conjunto de imágenes correcto
    if (tema === "cumpleaños") {
        imagenes = imagenesCumple;
    } else if (tema === "navidad") {
        imagenes = imagenesNavidad;
    } else if (tema === "san-valentin") {
        imagenes = imagenesSanValentin;
    }

    // Crear nuevos nodos de imagen para el tema seleccionado
    imagenes.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Marco ${src}`;
        img.classList.add("marco");
        img.addEventListener("click", function() {
            // Cambiar la imagen en la vista previa
            imagenPreview.src = img.src;
        });

        // Agregar el nodo de imagen al contenedor
        contenedorImagenes.appendChild(img);
    });
});

// Cambiar el color de fondo
colorFondoInput.addEventListener("input", function() {
    tarjetaPreview.style.backgroundColor = colorFondoInput.value;
});

// Actualizar los campos de texto en la vista previa
nombreInput.addEventListener("input", function() {
    const textoNombre = nombreInput.value || "Nombre Aquí";
    nombrePreview.textContent = textoNombre;
});

tituloInput.addEventListener("input", function() {
    const textoTitulo = tituloInput.value || "Felicidades";
    tituloPreview.textContent = textoTitulo;
});

mensajeInput.addEventListener("input", function() {
    const textoMensaje = mensajeInput.value || "Que pases un feliz día";
    mensajePreview.textContent = textoMensaje;
});

// Función para mostrar los cambios al hacer clic en "Mostrar"
document.getElementById("mostrar").addEventListener("click", function() {
    const mensajeFinal = document.createElement("p");
    mensajeFinal.textContent = "¡Tarjeta generada!";
    document.body.appendChild(mensajeFinal);
});

// Activar/desactivar modo oscuro
const modoOscuroBoton = document.getElementById("modo-oscuro-toggle");

modoOscuroBoton.addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");

    // Cambiar el texto del botón según el estado
    if (document.body.classList.contains("modo-oscuro")) {
        modoOscuroBoton.textContent = "Modo Claro";
    } else {
        modoOscuroBoton.textContent = "Modo Oscuro";
    }
});
