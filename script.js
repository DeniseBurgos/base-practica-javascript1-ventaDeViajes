import { barcelona, roma, paris, londres } from "./ciudades.js";

//obtener los elementos del DOM
let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");

//agregar un evento CLICK
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    //REMOVER EL ACTIVO
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });
    //Agregar la clase active al enlace actual
    this.classList.add("active");
    //AGREGAR ACTIVE AL QUE CORRESPONDA
    //obtener el contenido correspondientesegun el enlace
    let contenido = obtenerContenido(this.textContent);
    //TRAER LA INFO DEL OBJETO CORRESPONDIENTE A LA ELECCION

    //MOSTRAR EL CONTENIDO DEL DOM
    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
  });
});
//Funcion para mostrar la info correcta desde ciudades.js
function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
