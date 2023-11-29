// Llamar los inputs necesarios que se crearon en el HTML
const input_tarjeta = document.getElementById("input_tarjeta");
const input_fecha = document.getElementById("input_fecha");
const input_CVV = document.getElementById("input_CVV");
// Crear las mascaras que sirven para tener una idea de como va el input
const mascara_numero = "####-####-####-####";
const mascara_fecha = "##/##";
const mascara_CVV = "###";
// Crear los arreglos en donde se van a guardar los datos que ingrese el usuario
let alm_numero = []; // Maximo 16
let alm_fecha = []; // Maximo 4
let alm_CVV = []; // Maximo 3
// Evento que sirve para validar que no se actualice la pagina si el usuario esta ingresando datos en la tarjeta
input_tarjeta.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return;
    }
    e.preventDefault();
    ingreso_datos(mascara_numero, e.key, alm_numero);
    input_tarjeta.value = alm_numero.join("");
});
// Evento que sirve para validar que no se actualice la pagina si el usuario esta ingresando datos en la fecha
input_fecha.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return;
    }
    e.preventDefault();
    ingreso_datos(mascara_fecha, e.key, alm_fecha);
    input_fecha.value = alm_fecha.join("");
});
// Evento que sirve para validar que no se actualice la pagina si el usuario esta ingresando datos en el CVV
input_CVV.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return;
    }
    e.preventDefault();
    ingreso_datos(mascara_CVV, e.key, alm_CVV);
    input_CVV.value = alm_CVV.join("");
});
// Función de ingreso de datos que nos permite validar el ingreso de datos
function ingreso_datos(mascara, key, alm) {
    // Se crea otro arreglo en el cual se pone los datos que permite ingresar el usuario
    let numeros = ["0","1","2","3","4","5","6","7","8","9"];
    if (key === "Backspace" && alm.length > 0) {
        // El pop() elimina el ultimo dato que ingreso el usuario
        alm.pop();
        return;
    }
    if (numeros.includes(key) && alm.length + 1 <= mascara.length) {
        // Esto sirve para que cada que el usuario ingrese mas de 4 o 2 digitos se ingrese automaticamente un - o un /
        if (mascara[alm.length] === "-" || mascara[alm.length] === "/") {
            alm.push(mascara[alm.length], key);
        } else {
            // Esto sirve para que cuando el usuario no ha superaro los 4 o 2 números no se añada el - o el /
            alm.push(key);
        }
    }
}
