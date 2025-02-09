
//Challenge amigos secreto

let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo");

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
    console.log(amigos);
}