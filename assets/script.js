/* var parrafos= document.getElementsByClassName("parrafo");
console.log(parrafos);

document.getElementsByClassName("parrafo")[0].innerHTML = "Parrafo cambiado dinamicamente";  */

var parrafo1 = document.querySelectorAll(".parrafo")[1].textContent= "Nuevo texto de parrafo";
var parrafo2 = document.querySelector("#parrafo2").textContent= "Nuevo texto de parrafo";

var parrafo1 = document.querySelectorAll(".parrafo")[0];
var parrafo2 = document.querySelector("#parrafo2");

/* document.getElementById("parrafo2").innerHTML= "Soy el parrafo 2" */

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(parrafo1);
console.log(parrafo2);

