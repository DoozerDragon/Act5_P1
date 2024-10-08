const temaSelect = document.getElementById("tema");
const colorFondoInput = document.getElementById("color-fondo");
const nombreInput = document.getElementById("nombre");
const tituloInput = document.getElementById("titulo");
const mensajeInput = document.getElementById("mensaje");
const mostrarBtn = document.getElementById("mostrar");
const modoOscuroBoton = document.getElementById("modo-oscuro-toggle");

const tituloPreview = document.getElementById("titulo-preview");
const nombrePreview = document.getElementById("nombre-preview");
const mensajePreview = document.getElementById("mensaje-preview");
const tarjetaPreview = document.getElementById("tarjeta-preview");
const imagenPreview = document.getElementById("imagen-preview");

//Grupos de imágenes por tema (ruta actualizada a img/nombreImagen)
const imagenesCumple = ["img/marco_1_cump.png", "img/marco_2_cump.png", "img/marco_3_cump.png"];
const imagenesNavidad = ["img/marco1.png", "img/marco2.png", "img/marco3.png"];
const imagenesSanValentin = ["img/marcos_1_san.png", "img/marcos_3_san.png", "img/marcos_3_san.png"];

//Cambiar el grupo de imágenes según el tema seleccionado
temaSelect.addEventListener("change", function() {
    const tema = temaSelect.value;
    let imagenes = [];

    //Limpiar el contenedor de imágenes
    const contenedorImagenes = document.querySelector(".imagenes");
    while (contenedorImagenes.firstChild) {
        contenedorImagenes.removeChild(contenedorImagenes.firstChild);
    }

    //Seleccionar el grupo de imágenes
    if (tema === "cumpleaños") {
        imagenes = imagenesCumple;
    } else if (tema === "navidad") {
        imagenes = imagenesNavidad;
    } else if (tema === "san-valentin") {
        imagenes = imagenesSanValentin;
    }

    //Crear nuevos nodos de imagen para el tema seleccionado
    imagenes.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Marco ${src}`;
        img.classList.add("marco");
        img.addEventListener("click", function() {
            // Cambiar la imagen del marco en la vista previa (fondo de la tarjeta)
            tarjetaPreview.style.backgroundImage = `url(${img.src})`;
            tarjetaPreview.style.backgroundSize = 'cover';
            tarjetaPreview.style.backgroundPosition = 'center';
        });

        //Agregar el nodo de imagen al contenedo
        contenedorImagenes.appendChild(img);
    });
});

//Cambiar el color de fondo en la vista previa
colorFondoInput.addEventListener("input", function() {
    tarjetaPreview.style.backgroundColor = colorFondoInput.value;
});

//Mostrar texto en la vista previa
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
    mensajePreview.textContent = textoMensajeñ-;
});

//Mostrar los cambios al hacer clic en "Mostrar"
mostrarBtn.addEventListener("click", function() {
    const mensajeFinal = document.createElement("p");
    mensajeFinal.textContent = "¡Tarjeta generada!";
    mensajeFinal.classList.add("texto-animado"); // Añadir animación al texto
    document.body.appendChild(mensajeFinal);
});

//Activar/desactivar modo oscuro
modoOscuroBoton.addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");

    // Cambiar el texto del botón según el estado
    if (document.body.classList.contains("modo-oscuro")) {
        modoOscuroBoton.textContent = "Modo Claro";
    } else {
        modoOscuroBoton.textContent = "Modo Oscuro";
    }
});

//Cambio del tipo, tamaño y color de letra
const tipoLetraSelect = document.getElementById("tipo-letra");
const tamanoLetraSelect = document.getElementById("tamano-letra");
const colorLetraInput = document.getElementById("color-letra");

// Función para cambiar el estilo de los textos de la tarjeta
const aplicarEstiloTexto = (propiedad, valor) => {
    nombrePreview.style[propiedad] = valor;
    tituloPreview.style[propiedad] = valor;
    mensajePreview.style[propiedad] = valor;
};

// Evento para cambiar tipo de letra
tipoLetraSelect.addEventListener("change", function() {
    aplicarEstiloTexto("fontFamily", tipoLetraSelect.value);
});

// Evento para cambiar tamaño de letra
tamanoLetraSelect.addEventListener("input", function() {
    aplicarEstiloTexto("fontSize", tamanoLetraSelect.value + "px");
});

// Evento para cambiar color de letra
colorLetraInput.addEventListener("input", function() {
    aplicarEstiloTexto("color", colorLetraInput.value);
});
