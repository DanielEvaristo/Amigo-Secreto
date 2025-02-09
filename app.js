
//Challenge amigos secreto
let lista = obtenerElemento("listaAmigos")

let amigos = [];

function agregarAmigo(){
    let nombre = obtenerElemento("amigo");

    //Verificar que el campo no esté vacío
    if(!nombre.value.trim()){
        alert("Por favor, inserte un nombre");
        nombre.value = "";
        return;
    }

    //Verificar que el amigo no haya sido agregado
    for(let i = 0; i<amigos.length; i++){
        if(amigos[i] === nombre.value){
            alert("Este amigo ya fue agregado");
            nombre.value = "";
            return;
        }
    }

    //Agregar el nombre a la lista de amigos
    amigos.push(nombre.value);
    nombre.value = "";
    actualizarLista();
}

function actualizarLista(){
    lista.innerHTML = "";

    for(let i = 0; i<amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if(!amigos.length){
        alert("Por favor, agregue amigos");
        return;
    }
    let numeroAleatorio = Math.floor(Math.random()*amigos.length);
    let resultado = obtenerElemento("resultado");
    lista.innerHTML = "";
    resultado.textContent = `El amigo secreto es : ${amigos[numeroAleatorio]}`;
}

function obtenerElemento(elemento){
    return document.getElementById(elemento);
}