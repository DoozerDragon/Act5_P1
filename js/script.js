// Elementos de la página
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

// Grupos de imágenes por tema (rutas actualizadas a img/nombreImagen)
const imagenesCumpleMarcos = ["img/marco_1_cump.png", "img/marco_2_cump.png", "img/marco_3_cump.png"];
const imagenesCumplePortadas = ["img/cump1.png", "img/cump2.png", "img/cump3.png"];

const imagenesNavidadMarcos = ["img/marco1.png", "img/marco2.png", "img/marco3.png"];
const imagenesNavidadPortadas = ["img/nav1.png", "img/nav2.png", "img/nav3.png"];

const imagenesSanValentinMarcos = ["img/marco_1_san.png", "img/marco_2_san.png", "img/marco_3_san.png"];
const imagenesSanValentinPortadas = ["img/sanva1.png", "img/sanva2.png", "img/sanva3.png"];

// Función para establecer la imagen de fondo predeterminada según el tema
function establecerImagenPredeterminada(tema) {
    let imagenPredeterminada = "";

    if (tema === "cumpleaños") {
        imagenPredeterminada = imagenesCumpleMarcos[0];
    } else if (tema === "navidad") {
        imagenPredeterminada = imagenesNavidadMarcos[0];
    } else if (tema === "san-valentin") {
        imagenPredeterminada = imagenesSanValentinMarcos[0];
    }

    tarjetaPreview.style.backgroundImage = `url(${imagenPredeterminada})`;
    tarjetaPreview.style.backgroundSize = 'cover';
    tarjetaPreview.style.backgroundPosition = 'center';
}

// Función para mostrar las imágenes de marco
function mostrarImagenesMarcos(tema) {
    let imagenes = [];

    if (tema === "cumpleaños") {
        imagenes = imagenesCumpleMarcos;
    } else if (tema === "navidad") {
        imagenes = imagenesNavidadMarcos;
    } else if (tema === "san-valentin") {
        imagenes = imagenesSanValentinMarcos;
    }

    const contenedorMarcos = document.querySelector(".imagenes-marcos");
    while (contenedorMarcos.firstChild) {
        contenedorMarcos.removeChild(contenedorMarcos.firstChild);
    }


    // Generar todas las imágenes usando un solo 'innerHTML'
    contenedorMarcos.innerHTML = imagenes.map(src => `<img src="${src}" alt="Marco ${src}" class="marco" />`).join("");
  
  // Delegación de eventos al contenedor, en lugar de asignar a cada imagen individual
    contenedorMarcos.addEventListener("click", function(event) {
        if (event.target.tagName === "IMG") {  // Verificar que el elemento clicado sea una imagen
            tarjetaPreview.style.backgroundImage = `url(${event.target.src})`;
            tarjetaPreview.style.backgroundSize = 'cover';
            tarjetaPreview.style.backgroundPosition = 'center';
        }
    });
}

// Función para mostrar las imágenes de portada
function mostrarImagenesPortadas(tema) {
    let imagenes = [];

    if (tema === "cumpleaños") {
        imagenes = imagenesCumplePortadas;
    } else if (tema === "navidad") {
        imagenes = imagenesNavidadPortadas;
    } else if (tema === "san-valentin") {
        imagenes = imagenesSanValentinPortadas;
    }

    const contenedorPortadas = document.querySelector(".imagenes-portadas");
    while (contenedorPortadas.firstChild) {
        contenedorPortadas.removeChild(contenedorPortadas.firstChild);
    }
   
    // Limpiar el contenedor antes de agregar las imágenes
contenedorPortadas.innerHTML = '';

// Recorrer el arreglo de imágenes usando `for...of`
for (const src of imagenes) {
    contenedorPortadas.innerHTML += `
        <img src="${src}" alt="Portada ${src}" class="portada" />
    `;
}

// Añadir el manejador de eventos para capturar los clics en las imágenes
    contenedorPortadas.addEventListener("click", (event) => {
        if (event.target.tagName === "IMG") {  //Aquí se  verifica que sea una imagen la que se seleccionó
            imagenPreview.src = event.target.src; //Se cambia la imagen de vista previa
            imagenPreview.style.display = "block"; //Verificar que la vista previa esté visible
            console.log(event.target.src); //Depuración
        }
    });

}

// Cambiar el grupo de imágenes según el tema seleccionado
temaSelect.addEventListener("change", function () {
    const tema = temaSelect.value;

    // Establecer la primera imagen del grupo como predeterminada
    establecerImagenPredeterminada(tema);

    // Mostrar los conjuntos de imágenes de marcos y portadas
    mostrarImagenesMarcos(tema);
    mostrarImagenesPortadas(tema);
});

// Establecer la imagen predeterminada inicial al cargar la página
window.onload = function () {
    const temaInicial = temaSelect.value;
    establecerImagenPredeterminada(temaInicial);
    mostrarImagenesMarcos(temaInicial);
    mostrarImagenesPortadas(temaInicial);
};

// Cambiar el color de fondo en la vista previa
colorFondoInput.addEventListener("input", function () {
    tarjetaPreview.style.backgroundColor = colorFondoInput.value;
});

// Mostrar texto en la vista previa
nombreInput.addEventListener("input", function () {
    const textoNombre = nombreInput.value || "Nombre Aquí";
    nombrePreview.textContent = textoNombre;
});

tituloInput.addEventListener("input", function () {
    const textoTitulo = tituloInput.value || "Felicidades";
    tituloPreview.textContent = textoTitulo;
});

mensajeInput.addEventListener("input", function () {
    const textoMensaje = mensajeInput.value || "Que pases un feliz día";
    mensajePreview.textContent = textoMensaje;
});

// Mostrar los cambios al hacer clic en "Mostrar"
mostrarBtn.addEventListener("click", function () {
    const mensajeFinal = document.createElement("p");
    mensajeFinal.textContent = "¡Tarjeta generada!";
    mensajeFinal.classList.add("texto-animado"); // Añadir animación al texto
    document.body.appendChild(mensajeFinal);
});

// Activar/desactivar modo oscuro
modoOscuroBoton.addEventListener("click", function () {
    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        modoOscuroBoton.textContent = "Modo Claro";
    } else {
        modoOscuroBoton.textContent = "Modo Oscuro";
    }
});

// Cambio del tipo, tamaño y color de letra
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
tipoLetraSelect.addEventListener("change", function () {
    aplicarEstiloTexto("fontFamily", tipoLetraSelect.value);
});

// Evento para cambiar tamaño de letra
tamanoLetraSelect.addEventListener("input", function () {
    aplicarEstiloTexto("fontSize", tamanoLetraSelect.value + "px");
});

// Evento para cambiar color de letra
colorLetraInput.addEventListener("input", function () {
    aplicarEstiloTexto("color", colorLetraInput.value);
});
