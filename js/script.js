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

if (ingresar) {
    let AlimentoParaMascota = "felino";
    let opcion = prompt("Escoge el alimento que desees: \n1-Monello 7kg $90.000 sin IVA. \n Presiona x para salir.");
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
                            let precioProducto = 90.000
                            let descuento = 15.000
                            let precioTotal = resta(suma(precioProducto, iva(precioProducto)), descuento)
                            console.log(precioTotal);

                            let total = ("Son $92.900");
                    }


                }

        }

    }

}
