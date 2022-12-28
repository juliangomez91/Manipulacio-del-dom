// h1 {color :red}
//.parrafo {.....}
//#parrafon {......}

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const parrafon = document.getElementById( "parrafon");
const input = document.querySelector("input");

console.log({
    h1,
    p,
    parrafito,
    parrafon,
    input,
});

h1.innerHTML = "patito <br> feo"; // modificar el html desde js inclusive con etiquetas//
h1.innerText ="patito <br> feo"; // modifica el html pero todo lo lee solo cmo texto//
console.log(h1.getAttribute("class")); // modificar una clase en html//
h1.setAttribute("class", "rojo");// modificar la clase//

h1.classList.add("azul");// agregar un a clase mas con javascript//
h1.classList.remove("azul");// remueve una clase//
//h1.classlist.toggle("");
//h1.classlist.contains("");

input.value = "456"// cambiar el valor por defecto

//console.log//


const img = (document.createElement("img"));//crear la imagen
img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpUGcF374WlWMB-c1HbL63hmtbkdI0TOaKQ&usqp=CAU");
console.log(img);// darle un atributo a la imagen en este caso se le asigno la url


parrafon.innerHTML ="";// borrar el parrafo
parrafon.append(img);// agregar la imagen