// Definimos los caracteres que vamos a usar
let caracteres = "abcdefghijklmnopqrstuvwxyz";
let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let caracteresNumeros = "0123456789";
let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";

// devuelve un valor aleatorio entre min y max
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarPassword(longitud) {
    // Validación básica, porque si no todo explota
    if (longitud < 8) longitud = 8;
    if (longitud > 50) longitud = 50;

    let password = [];

    // 1–2 números
    let cantidadNumeros = numeroAleatorio(1, 2);
    for (let i = 0; i < cantidadNumeros; i++) {
        password.push(caracteresNumeros[numeroAleatorio(0, caracteresNumeros.length - 1)]);
    }

    // 1–2 especiales
    let cantidadEspeciales = numeroAleatorio(1, 2);
    for (let i = 0; i < cantidadEspeciales; i++) {
        password.push(caracteresEspeciales[numeroAleatorio(0, caracteresEspeciales.length - 1)]);
    }

    // Mínimo 1 mayúscula
    password.push(caracteresMayusculas[numeroAleatorio(0, caracteresMayusculas.length - 1)]);

    // El resto (hasta longitud) será minúsculas
    while (password.length < longitud) {
        password.push(caracteres[numeroAleatorio(0, caracteres.length - 1)]);
    }

    // Mezclamos todo para que no quede ordenado
    password = password.sort(() => Math.random() - 0.5).join('');

    return password;
}

// Ejemplo: meter un password de 12 chars en el textarea
window.onload = function () {
    const text_cifrado = document.getElementById("text_cifrado");
    text_cifrado.value = generarPassword(12);
};