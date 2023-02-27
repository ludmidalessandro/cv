
document.getElementById("botón").onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS" ;
}

document.addEventListener ("click", function () {
    console.log("Hola mundo desde EventListener")
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS" ;
})