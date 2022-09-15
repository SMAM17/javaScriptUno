function calcular() {

    let viajes = document.getElementById("viajes").value;
    let pasajeros = document.getElementById("pasajeros").value;
    let total = 0;
    total = viajes * pasajeros;
    if (viajes == "medellin") {

        // total=10000*pasajeros
        // resultado1.innerHTML = "el resultado es :" + total;
        // document.write(resultado1)
        let resultado1 = document.getElementById("respuesta");
        resultado1.innerHTML = "el resultado es :" + total;

    }

    if (viajes=="pereira"){

        total=2000*4
    }


}
