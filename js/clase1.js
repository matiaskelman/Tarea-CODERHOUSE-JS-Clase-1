let nombre = prompt("Ingrese nombre:");

nombre = nombre.toUpperCase();

let apellido = prompt("Ingrese su apellido: ");

apellido = apellido.toUpperCase();

if (nombre == "GERMAN") {
    console.warn("Como va tutor?");
}

document.write("<h2>" + "Nombre: " + nombre + " " + apellido + "</h2>");

let numero = prompt("Ingresa tu numero favorito: ");

document.write("<h2>" + numero + "</h2>");