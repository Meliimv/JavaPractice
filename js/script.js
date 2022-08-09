/*Bienvenida al sitio*/

const btnSaludoBienvenido = document.getElementById("bienvenido");
//const btnSaludoUnico = document.getElementById("unico");
const titulo = document.querySelector(".entrada")

function saludoBienvenido() {
    alert("Bienvenido/a a CeVeCatdog");
}

/*function saludoUnico(nombre) {
    alert("Bienvenido/a,  " + nombre)
}*/

btnSaludoBienvenido.addEventListener("click", saludoBienvenido);


//btnSaludoUnico.addEventListener("click", ()=>{
//let nombre = document.getElementById("nombre").value;
// SaludoUnico(nombre);
//})

/*btnSaludoUnico.onclick = () => {
  alert("Cuidamos a tu mascota con mucho amor");
  }*/

const btnSaludoUnico = document.getElementById("unico");
btnSaludoUnico.addEventListener("click", ()=>{
    swal.fire({
        title: "Saludo",
        text: "Cuidamos a tu mascota con mucho amor",
        icon: "info",
        iconColor: "#00ff00",
        cnfirmButtonText: "CeVeCatdog",
        position: "center-start"

    })
})

/*alimento*/

let radio7kilos = document.getElementById("7kilos");
let radio15kilos = document.getElementById("15kilos");

function cambiarImagen(source) {
    document.getElementById("Monello").src = source
}

radio7kilos.addEventListener("click", () => {
    cambiarImagen("./images/monello7k.jpg");
})

radio15kilos.addEventListener("click", () => {
    cambiarImagen("./images/monello15k.jpg");
})

function cambiarImagen(source) {
    document.getElementById("Hills").src = source
}

radio7kilos.addEventListener("click", () => {
    cambiarImagen("./images/hills7k.jpg");
})

radio15kilos.addEventListener("click", () => {
    cambiarImagen("./images/hills15k.jpg");
})

let melissa = {
    user: "Melissa Sanchez",
    contraseña: "Colombia2022"

}
sessionStorage.setItem("usuario", melissa);
console.log(sessionStorage.getItem("usuario"));
sessionStorage.setItem("usuario", JSON.stringify(melissa));
let usuarioMemo = JSON.parse(sessionStorage.getItem("usuario"));
console.log(sessionStorage.getItem("usuario"));
console.log(usuarioMemo);



