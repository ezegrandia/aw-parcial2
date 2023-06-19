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
    hombreContent.style.opacity = "0";
    hombreContent.style.visibility = "hidden";
    casualToggleLinks.style.opacity = "0";
    casualToggleLinks.style.visibility = "hidden";
    formalToggleLinks.style.opacity = "0";
    formalToggleLinks.style.visibility = "hidden";
}

const hombreToggle = document.getElementById("hombre-toggle");
const casualToggle = document.getElementById("casual-toggle");
const formalToggle = document.getElementById("formal-toggle");
const casualToggleLinks = document.getElementById("casual-toggle-links");
const formalToggleLinks = document.getElementById("formal-toggle-links");
const hombreContent = document.getElementById("hombre-content");
ocultarHombre();

hombreToggle.addEventListener("click", function () {
    if (hombreContent.style.visibility === "hidden") {
        hombreContent.style.opacity = "1";
        hombreContent.style.visibility = "visible";
        ocultarMujer();
    } else {
        hombreContent.style.opacity = "0";
        hombreContent.style.visibility = "hidden";
    }
});

casualToggle.addEventListener("click", function () {
    if (casualToggleLinks.style.visibility === "hidden") {
        casualToggleLinks.style.opacity = "1";
        casualToggleLinks.style.visibility = "visible";
        casualToggleLinks.style.position = "relative";
    } else {
        casualToggleLinks.style.opacity = "0";
        casualToggleLinks.style.visibility = "hidden";
        casualToggleLinks.style.position = "absolute";
    }
});

formalToggle.addEventListener("click", function () {
    if (formalToggleLinks.style.visibility === "hidden") {
        formalToggleLinks.style.opacity = "1";
        formalToggleLinks.style.visibility = "visible";
        formalToggleLinks.style.position = "relative";
    } else {
        formalToggleLinks.style.opacity = "0";
        formalToggleLinks.style.visibility = "hidden";
        formalToggleLinks.style.position = "absolute";
    }
});

// Mujer Toggle

function ocultarMujer() {
    mujerContent.style.opacity = "0";
    mujerContent.style.visibility = "hidden";
    casualMToggleLinks.style.opacity = "0";
    casualMToggleLinks.style.visibility = "hidden";
    formalMToggleLinks.style.opacity = "0";
    formalMToggleLinks.style.visibility = "hidden";
}

const mujerToggle = document.getElementById("mujer-toggle");
const casualMToggle = document.getElementById("casual-m-toggle");
const formalMToggle = document.getElementById("formal-m-toggle");
const casualMToggleLinks = document.getElementById("casual-m-toggle-links");
const formalMToggleLinks = document.getElementById("formal-m-toggle-links");
const mujerContent = document.getElementById("mujer-content");
ocultarMujer();

mujerToggle.addEventListener("click", function () {
    if (mujerContent.style.visibility === "hidden") {
        mujerContent.style.opacity = "1";
        mujerContent.style.visibility = "visible";
        ocultarHombre();
    } else {
        mujerContent.style.opacity = "0";
        mujerContent.style.visibility = "hidden";
    }
});

casualMToggle.addEventListener("click", function () {
    if (casualMToggleLinks.style.visibility === "hidden") {
        casualMToggleLinks.style.opacity = "1";
        casualMToggleLinks.style.visibility = "visible";
        casualMToggleLinks.style.position = "relative";
    } else {
        casualMToggleLinks.style.opacity = "0";
        casualMToggleLinks.style.visibility = "hidden";
        casualMToggleLinks.style.position = "absolute";
    }
});

formalMToggle.addEventListener("click", function () {
    if (formalMToggleLinks.style.visibility === "hidden") {
        formalMToggleLinks.style.opacity = "1";
        formalMToggleLinks.style.visibility = "visible";
        formalMToggleLinks.style.position = "relative";
    } else {
        formalMToggleLinks.style.opacity = "0";
        formalMToggleLinks.style.visibility = "hidden";
        formalMToggleLinks.style.position = "absolute";
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

/*---------------------------------
    Sección Reloj Digital
---------------------------------*/

function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiem = "AM"; // Por defecto es AM

    // Convierte las horas al formato de 12 horas y determina el prefijo adecuado
    if (hours > 12) {
        hours = hours - 12;
        meridiem = "PM";
    }
    if (hours === 0) {
        hours = 12;
    }

    // Agrega un cero a los minutos y segundos si son menores a 10
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Construye la cadena de tiempo
    var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;

    // Actualiza el reloj en la página
    document.getElementById("clock").innerHTML = timeString;
}

// Actualiza el reloj cada segundo
setInterval(displayTime, 1000);

/*---------------------------------
    Sección Color Formulario
---------------------------------*/

// Obtener elementos del DOM del Formulario1
const myForm1 = document.getElementById("myForm1");
const inputEmailA = document.getElementById("InputEmailA");
const InputPasswordA = document.getElementById("InputPasswordA");
// Validación del input de correo electrónico en myForm1 cuando se hace focus en el input
inputEmailA.addEventListener("focus", function () {
    if (this.value.trim() === "") {
        this.classList.add("is-empty");
        this.classList.add("is-invalid");
    }
});
// Validación del input de correo electrónico en myForm1 cuando se escribe en el input
inputEmailA.addEventListener("input", function () {
    const posicionArroba = this.value.indexOf("@"); // Se obtiene la posición del arroba en el valor del input
    // Si hay al menos un carácter antes y después del arroba
    // Se obtiene el siguiente carácter después del arroba
    if (posicionArroba > 0 && this.value.length > posicionArroba + 1) {
        // Si el siguiente carácter es válido, se le agrega la clase CSS de "is-valid" y se remueven las clases de "is-empty" e "is-invalid"
        const siguienteCaracter = this.value[posicionArroba + 1];
        const esCaracterValido = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/.test(siguienteCaracter);
        if (esCaracterValido) {
            this.classList.add("is-valid");
            this.classList.remove("is-empty", "is-invalid");
            console.log("Es valido");
        } else {
            this.classList.add("is-invalid");
            this.classList.remove("is-empty", "is-valid");
            console.log("Es invalido");
        }
    } else {
        // Si no hay al menos un carácter antes y después del arroba, se le agrega las clases CSS de "is-empty" e "is-invalid", y se remueve la clase "is-valid"
        this.classList.add("is-empty", "is-invalid");
        this.classList.remove("is-valid");
        console.log("Es invalido");
    }
});

InputPasswordA.addEventListener("focus", function () {
    if (this.value.trim() === "") {
        this.classList.add("is-empty");
        this.classList.add("is-invalid");
    }
});

InputPasswordA.addEventListener("input", function () {
    if (this.value.trim() === "") {
        this.classList.add("is-empty");
        this.classList.remove("is-not-empty");
        this.classList.add("is-invalid");
        this.classList.remove("is-valid");
    } else {
        this.classList.remove("is-empty");
        this.classList.add("is-not-empty");
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
    }
});

myForm1.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    // validación del input de correo electrónico
    if (inputEmailA.value.trim() === "" || !inputEmailA.checkValidity()) {
        inputEmailA.classList.add("is-invalid");
        inputEmailA.classList.remove("is-valid");
        isValid = false;
    } else {
        inputEmailA.classList.remove("is-invalid");
        inputEmailA.classList.add("is-valid");
    }

    // validación del input de contraseña
    if (!InputPasswordA.classList.contains("is-valid")) {
        InputPasswordA.classList.add("is-invalid");
        InputPasswordA.classList.remove("is-valid");
        isValid = false;
    } else {
        InputPasswordA.classList.remove("is-invalid");
        InputPasswordA.classList.add("is-valid");
    }

    // envío del formulario si es válido
    if (isValid) {
        myForm1.submit();
    }
});

const myForm2 = document.getElementById("myForm2");
const inputEmailB = document.getElementById("InputEmailB");
const inputPasswordB = document.getElementById("InputPasswordB");
const inputPasswordB2 = document.getElementById("InputPasswordB2");

inputEmailB.addEventListener("focus", function () {
    if (this.value.trim() === "") {
        this.classList.add("is-empty");
        this.classList.add("is-invalid");
    }
});

inputEmailB.addEventListener("input", function () {
    const posicionArroba = this.value.indexOf("@");

    if (posicionArroba > 0 && this.value.length > posicionArroba + 1) {
        const siguienteCaracter = this.value[posicionArroba + 1];
        const esCaracterValido = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/.test(siguienteCaracter);
        if (esCaracterValido) {
            this.classList.add("is-valid");
            this.classList.remove("is-empty", "is-invalid");
            console.log("Es valido");
        } else {
            this.classList.add("is-invalid");
            this.classList.remove("is-empty", "is-valid");
            console.log("Es invalido");
        }
    } else {
        this.classList.add("is-empty", "is-invalid");
        this.classList.remove("is-valid");
        console.log("Es invalido");
    }
});

inputPasswordB.addEventListener("input", function () {
    if (this.value.trim() === "") {
        this.classList.add("is-empty");
        this.classList.remove("is-not-empty");
    } else {
        this.classList.remove("is-empty");
        this.classList.add("is-not-empty");
    }
});

inputPasswordB2.addEventListener("input", function () {
    if (this.value.trim() === "") {
        this.classList.add("is-empty");
        this.classList.remove("is-not-empty");
    } else if (this.value !== inputPasswordB.value) {
        this.classList.add("is-invalid");
        this.classList.remove("is-valid");
    } else {
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
    }
});

myForm2.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    // validación del input de correo electrónico
    if (inputEmailB.value.trim() === "" || !inputEmailB.checkValidity()) {
        inputEmailB.classList.add("is-invalid");
        inputEmailB.classList.remove("is-valid");
        isValid = false;
    } else {
        inputEmailB.classList.remove("is-invalid");
        inputEmailB.classList.add("is-valid");
    }

    // validación del input de contraseña
    if (inputPasswordB.value.trim() === "") {
        inputPasswordB.classList.add("is-invalid");
        inputPasswordB.classList.remove("is-valid");
        isValid = false;
    } else {
        inputPasswordB.classList.remove("is-invalid");
        inputPasswordB.classList.add("is-valid");
    }

    // validación del input de confirmación de contraseña
    if (inputPasswordB2.value.trim() === "") {
        inputPasswordB2.classList.add("is-invalid");
        inputPasswordB2.classList.remove("is-valid");
        isValid = false;
    } else if (inputPasswordB2.value !== inputPasswordB.value) {
        inputPasswordB2.classList.add("is-invalid");
        inputPasswordB2.classList.remove("is-valid");
        isValid = false;
    } else {
        inputPasswordB2.classList.remove("is-invalid");
        inputPasswordB2.classList.add("is-valid");
    }

    // envío del formulario si es válido
    if (isValid) {
        myForm2.submit();
    }
});
