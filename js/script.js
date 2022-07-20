/*Bienvenida al sitio*/

let nombreUsuario = prompt("Ingresa tu nombre")
alert("Bienvenid@,  " + nombreUsuario)


/*digite su clave*/

let claveGuardada = "Colombia2022";
let ingresar = false;
for (let i = 2; i >= 0; i--) {
    let claveUsuario = prompt("Ingresa tu clave");
    if (claveGuardada == claveUsuario) {
        alert("Ingresaste exitosamente");
        ingresar = true;
        break;
    } else {
        alert("error, te quedan " + i + " intentos")
    }

}

/*opciones carrito*/


class alimento {

    constructor(nombre, peso, valor, id) {
        this.nombre = nombre;
        this.peso = peso;
        this.valor = valor;
        this.id = id;


    }

    asignarId(array) {
        this.id = array.lenght;
    }
}



function alimentos(nombre, peso, valor, tipo, id) {
    this.nombre = nombre;
    this.peso = peso;
    this.valor = valor;
    this.tipo = tipo;
    this.id = id;

    this.mostrar = function () {
        console.log("alimento  " + this.nombre, "valor  " + this.valor, "tipo  " + this.tipo)
    }
}
const alimento1 = new alimentos("Monello", 10, 130.000, "renal", 1);
alimento1.mostrar();

const alimento2 = new alimentos("Hills", "10 kilos", 100.000, "digestive", 2);
alimento2.mostrar();
const alimento3 = new alimentos("Oh my cat", "10 kilos", 70.000, "todas las edades", 3);
alimento3.mostrar();

const alimento4 = new alimentos("Cat Chow", "10 kilos", 40.000, "control peso", 4)
alimento4.mostrar()

//const filtrado = alimentos.filter((alimento)alimento.precio>80.000)
//console.log(encontrado)

if (ingresar) {
    let alimentos= "felino";
    let opcion = prompt("Escoge el alimento que desees: \n1-Monello 10kg $130.000 sin IVA. \n2-Hills 10kg $100.000. \n3-oh my cat 10kg $70.0000. n\4- cat chow 10 kilos n\Presiona x para salir.");
    while (opcion != "x" && opcion != "X") {
        switch (opcion) {
            case "1":
                let opcion = prompt("escoge una opcion: \n1-Ir a pagar. \n salir");
                while (opcion != "salir" && opcion != "SALIR") {
                    switch (opcion) {
                        case "1":
                            const suma = (a, b) => a + b;
                            const resta = (a, b) => a - b;
                            const iva = x => x * 0.19
                            let precioProducto = 130.000
                            let descuento = 15.000
                            let precioTotal = resta(suma(precioProducto, iva(precioProducto)), descuento)
                            console.log(precioTotal);

                            let Total = ("Son $139.700");
                            break;
                        

                    }


                }

        }

    }

}

