function   calcular() {
   let salida;
    let mostrar=document.getElementById("respuesta");
    let viajes = document.getElementById("viajes").value;
    let pasajeros =Number( document.getElementById("pasajeros").value)
    let maletas=Number(document.getElementById("peso").value)
    let tipoSilla = document.getElementById("tipoDeSilla").value;
    let total = 0;
    let pesoAdicional=0;
    let totalSilla = 0;
    let viajeTotal=0;
    
    if (viajes == 1) {

       total=300000*pasajeros
    }
    salida=total;
    if (viajes==2){

        total=200000*pasajeros
    }

    if (viajes==3){

        total=250000*pasajeros
       
    }

    if (viajes==4){

        total=180000*pasajeros
        
    }
    if (viajes==5){

      total=90000*pasajeros
      
  }

    if(maletas>50){
pesoAdicional=(maletas-50)*15000

    }
    // Tipo de silla
  if (tipoSilla == "Normal") {
    totalSilla = 0 ;
  }
  if (tipoSilla == "Ejecutiva") {
    totalSilla = 20000 ;
  }
  if (tipoSilla == "Vip") {
    totalSilla = 40000 ;
    }
    viajeTotal = total+pesoAdicional+totalSilla;
    mostrar.innerHTML= `FACTURA DE VIAJE<br> <br>Ciudad de destino: ${viajes}<br>Personas que viajan: ${pasajeros}<br>Peso de las maletas: ${maletas}<br>Tipo de sillas: ${tipoSilla}<br>Precio del viaje: ${total}<br>Precio adicional por maletas: ${pesoAdicional}<br>Precio de las sillas: ${totalSilla}<br>El total a pagar por el vuelo es: ${viajeTotal}`;
}
