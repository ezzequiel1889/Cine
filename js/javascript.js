/* TOMANDO LOS ELEMENTOS ID */
    let DNI = document.getElementById("input1");
    let EDAD = document.getElementById("input2");
    let PELICULA = document.getElementById("input3");
    let DIMENSION = document.getElementById("input4");
    let txtArea = document.getElementById("txtArea");
    let ENVIAR = document.getElementById("submit");
    let form = document.getElementById("formulario")
    let infoReservas = document.getElementsByClassName("contInfoReservas")
    let contInfo = document.getElementById("container");
    let body = document.getElementById("bodyIndex");
/* TOMANDO LOS ELEMENTOS PARA MOSTRAR LOS RESULTADOS */
    let mostrarDni = document.getElementById("listaDni");
    let mostrarEdad = document.getElementById("listaEdad");
    let mostrarPelicula = document.getElementById("listaPelicula");
    let mostrarDimension = document.getElementById("listaDimension");
    let mostrarComida = document.getElementById("listaComida");

/* FUNCION */
function datosUsuario(dniValor, edadValor){
    Swal.fire({
        icon: "success",
        title: "Reserva exitosa!",
        text: "tu dni: " + dniValor + " y tu edad: " + edadValor + " coinciden perfecto",
      });
}



/* Se agrega el evento de click */
ENVIAR.addEventListener("click", function(event){
event.preventDefault();
    /// DNI ///
        let dniValor = parseInt(DNI.value); 
            localStorage.setItem("DNI", dniValor); // "CLAVE" : valor
        
    /// EDAD ///
        let edadValor = parseInt(EDAD.value);
            //verificar mayor no mayor
                try{
                    if(edadValor>=18){
                        console.log('Edad valida');
                    }else{
                        throw new Error('sos menor de edad');
                    }
                }catch(err){
                    console.log('', err); // err toma el valor del throw new Error
                }finally{
                    console.log('Resultado de edad: ', edadValor);
                }
            localStorage.setItem("EDAD", edadValor); // "CLAVE" : valor
            let edadBorrado = localStorage.removeItem("EDAD", edadValor)
            console.log(edadBorrado); // se borra la clave : valor
        

    /// PELICULA ///
        let peliculaElegida = PELICULA.value;
            localStorage.setItem("PELICULA", peliculaElegida); // "CLAVE" : valor
        
        
    /// DIMENSION ///
        let dimensionValor = DIMENSION.value;
            if (dimensionValor != "3d" && dimensionValor != "3D" && dimensionValor != "4d" && dimensionValor != "4D") {
                
                Swal.fire("Tenes que elegir 3d o 4d, Cualquier otro valor se tomará como incorrecto");
                setInterval(() => {
                    console.log('Dimension no valida.');
                }, 7000);
            }
            localStorage.setItem("DIMENSION", dimensionValor); // "CLAVE" : valor
        
        
    /// COMIDA ///
        let comidaValor = txtArea.value;
            localStorage.setItem("COMIDA", comidaValor); // "CLAVE" : valor
            let infoObj = {
                dni: dniValor,
                edad: edadValor,
                pelicula: peliculaElegida,
                dimension: dimensionValor,
                comida: comidaValor
            }

            localStorage.setItem("todaInformacion", JSON.stringify(infoObj));
            console.log(infoObj);
            
            datosUsuario(dniValor,edadValor);
            
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

            mostrarDatos();
            form.reset();


        })  

