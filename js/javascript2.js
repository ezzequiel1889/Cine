/* FUNCION */
function datosUsuario(dniValor, edadValor){
    Swal.fire({
        icon: "success",
        title: "Reserva exitosa!",
        text: "tu dni: " + dniValor + " y tu edad: " + edadValor + " coinciden perfecto",
      });
}



function mostrarDatos (){
    //aparecer el container de displayNone a Flex
    contInfo.style.display = 'flex';
    //crear un div nuevo
    const nuevoDiv = document.createElement('div');
    
    //en ese div insertar en el html un contenedor con los h4 y la info
    nuevoDiv.innerHTML = `
    <div class="contJsInfo">
    <h4 class="titulo">DNI:</h4>${dniValor}<br>
    <h4>EDAD:</h4>${edadValor}<br> 
    <h4>PELICULA:</h4>${peliculaElegida}<br>
    <h4>COMIDA:</h4>${comidaValor} 
    </div>
    `           
    
    //agrega el nuevo bloque de datos al contenedor nuevoDiv sin eliminar el contenido anterior
    contInfo.appendChild(nuevoDiv);
}
