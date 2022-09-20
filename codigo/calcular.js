function   calcular() {
   let salida;
    let mostrar=document.getElementById("respuesta");
    let viajes = document.getElementById("viajes").value;
    let pasajeros =Number( document.getElementById("pasajeros").value)
    let maletas=Number(document.getElementById("peso").value)
    let tipoSilla = document.getElementById("silla").value;
    let total = 0;
    let pesoAdicional=0;
    let totalSilla = 0;
    total = viajes * pasajeros;
    if (viajes == 1) {

       total=100000*pasajeros
       mostrar.innerHTML = "el total del pasaje es :" + total;
      
       
        
    }
    salida=total;
    if (viajes==2){

        total=200000*pasajeros
        mostrar.innerHTML="el total del pasaje es: "+total;
    }

    if (viajes==3){

        total=250000*pasajeros
        mostrar.innerHTML="el total del pasaje es: "+total;
    }

    if (viajes==4){

        total=180000*pasajeros
        mostrar.innerHTML="el total del pasaje es: "+total;
    }

    if(maletas>50){
pesoAdicional=(maletas-50)*15000

    }
    // Tipo de silla
  if (tipoSilla == "Normal") {
    totalSilla = 0 * pasajeros;
  }
  if (tipoSilla == "Ejecutiva") {
    totalSilla = 20000 * pasajeros;
  }
  if (tipoSilla == "VIP") {
    totalSilla = 40000 * pasajeros;
    }
}
