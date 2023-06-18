/*---------------------------------
    Sección Fecha Encabezado
---------------------------------*/

// Seleccionar el elemento con id "fecha"
const fechaElemento = document.getElementById("fecha");

// Crear una nueva instancia del objeto "Date"
const fechaActual = new Date();

// Formatear la fecha en el formato deseado
const opcionesFecha = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
var fechaFormateada = fechaActual.toLocaleDateString("es-ES", opcionesFecha);

// Capitalizar la primera letra del día de la semana
fechaFormateada = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);

// Actualizar el contenido del elemento "fecha"
fechaElemento.textContent = fechaFormateada;

/*---------------------------------
    Sección Enlaces Encabezado
---------------------------------*/

// Obtener todos los elementos con la clase container-header-item
const headerItems = document.querySelectorAll(".container-header-item");

// Obtener el elemento del carrito
const carrito = document.querySelector(".container-header-item-carrito");

// Función de manejo de clic
function handleClick(event) {
    // Remover la clase header-link-active de todos los elementos
    headerItems.forEach((item) => {
        item.classList.remove("header-link-active");
    });

    // Remover la clase carrito-icon-active del carrito
    carrito.querySelector(".carrito-icon").classList.remove("carrito-icon-active");

    // Agregar la clase header-link-active al elemento clickeado
    event.currentTarget.classList.add("header-link-active");

    // Si el elemento clickeado es el carrito, agregar la clase carrito-icon-active
    if (event.currentTarget === carrito) {
        carrito.querySelector(".carrito-icon").classList.add("carrito-icon-active");
    }
}

// Agregar un listener de evento de clic a cada elemento
headerItems.forEach((item) => {
    item.addEventListener("click", handleClick);
});

/*---------------------------------
    Sección Dropdowns Toggles Menú
---------------------------------*/

// Hombre Toggle

function ocultarHombre() {
    hombreContent.style.display = "none";
    casualToggleLinks.style.display = "none";
    formalToggleLinks.style.display = "none";
}

const hombreToggle = document.getElementById("hombre-toggle");
const casualToggle = document.getElementById("casual-toggle");
const formalToggle = document.getElementById("formal-toggle");
const casualToggleLinks = document.getElementById("casual-toggle-links");
const formalToggleLinks = document.getElementById("formal-toggle-links");
const hombreContent = document.getElementById("hombre-content");
ocultarHombre();

hombreToggle.addEventListener("click", function () {
    if (hombreContent.style.display == "none") {
        hombreContent.style.display = "flex";
        ocultarMujer();
    } else {
        hombreContent.style.display = "none";
    }
});

casualToggle.addEventListener("click", function () {
    if (casualToggleLinks.style.display == "none") {
        casualToggleLinks.style.display = "flex";
    } else {
        casualToggleLinks.style.display = "none";
    }
});

formalToggle.addEventListener("click", function () {
    if (formalToggleLinks.style.display == "none") {
        formalToggleLinks.style.display = "flex";
    } else {
        formalToggleLinks.style.display = "none";
    }
});

// Mujer Toggle

function ocultarMujer() {
    mujerContent.style.display = "none";
    casualMToggleLinks.style.display = "none";
    formalMToggleLinks.style.display = "none";
}

const mujerToggle = document.getElementById("mujer-toggle");
const casualMToggle = document.getElementById("casual-m-toggle");
const formalMToggle = document.getElementById("formal-m-toggle");
const casualMToggleLinks = document.getElementById("casual-m-toggle-links");
const formalMToggleLinks = document.getElementById("formal-m-toggle-links");
const mujerContent = document.getElementById("mujer-content");
ocultarMujer();

mujerToggle.addEventListener("click", function () {
    if (mujerContent.style.display == "none") {
        mujerContent.style.display = "flex";
        ocultarHombre();
    } else {
        mujerContent.style.display = "none";
    }
});

casualMToggle.addEventListener("click", function () {
    if (casualMToggleLinks.style.display == "none") {
        casualMToggleLinks.style.display = "flex";
    } else {
        casualMToggleLinks.style.display = "none";
    }
});

formalMToggle.addEventListener("click", function () {
    if (formalMToggleLinks.style.display == "none") {
        formalMToggleLinks.style.display = "flex";
    } else {
        formalMToggleLinks.style.display = "none";
    }
});

/*---------------------------------
    Sección Menú
---------------------------------*/

const menuItems = document.querySelectorAll(".nav-link");

function handleClickMenu(event) {
    // Remover la clase header-link-active de todos los elementos
    menuItems.forEach((item) => {
        item.classList.remove("menu-link-active");
    });

    // Si el elemento actual tiene la clase "no-toggle", llamar a las funciones "ocultarHombre()" y "ocultarMujer()"
    if (event.currentTarget.classList.contains("no-toggle")) {
        ocultarHombre();
        ocultarMujer();
    }

    // Agregar la clase header-link-active al elemento clickeado
    event.currentTarget.classList.add("menu-link-active");
}

menuItems.forEach((item) => {
    item.addEventListener("click", handleClickMenu);
});
