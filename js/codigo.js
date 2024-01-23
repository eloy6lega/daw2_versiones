function saludar() {
    let nombre = "David";
    window.alert("Hola, ¿qué tal " + nombre + " ?");
}

function saludar2(nombre){
    window.alert("Hola, ¿qué tal " + nombre + "?");
}

function mostrarMensaje(){
    var mensajeElement = document.getElementById("mensaje");
    mensajeElement.style.display = "block";
}

function calcular(){
    let precio = 12;
    let unidades = window.prompt("Dime cuántas unidades quieres?");
    let total = precio * unidades;
    window.alert("El total es " + total);
    window.confirm("¿Aceptas la compra?")
}