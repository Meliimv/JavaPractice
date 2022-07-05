let claveSecreta = "Hay una serpiente en mi bota";
let mamáAdivina = prompt("cual crees que es la clave secreta?");

while(mamáAdivina!=claveSecreta){
    alert("No puedes entrar");
    mamáAdivina = prompt("cual crees que es la clave secreta?");

}

alert(claveSecreta + "  eres bienvenida!")