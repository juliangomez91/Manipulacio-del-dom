const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btncalcular");
const pResult = document.querySelector("#result");
const form = document.querySelector("#form")

form.addEventListener("submit", sumarImputValues);

function sumarImputValues(event) {
    //console.log({event});//
    event.preventDefault();
    const sumaInputs = input1.value + input2.value
    pResult.innerText = "Resultado: " + sumaInputs
}



//otra forma de utilizar el addEvent con submit es en el html cambiar el tipo de propiedad que por defecto le asigna la etiqueta form al ultimo boton <button type ="button" id="btnCalcular" >calcular</button>, se le cambio el tipo de sumbit a button y esto permite que se relaize la forma de click y tampoco toca cambiar la forma del addEvent por submit si no que puede seguir siendo el click.

//form.addEventListener("click", sumarImputValues);