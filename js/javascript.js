/* TOMANDO LOS ELEMENTOS ID */
    let DNI = document.getElementById("input1");
    let EDAD = document.getElementById("input2");
    let PELICULA = document.getElementById("input3");
    let DIMENSION = document.getElementById("input4");
    let txtArea = document.getElementById("txtArea");
    let ENVIAR = document.getElementById("submit");
    let form = document.getElementById("formulario")

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
            mostrarDni.textContent = `DNI: ${dniValor}`;
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
            mostrarEdad.textContent = `EDAD: ${edadValor}`;
            localStorage.setItem("EDAD", edadValor); // "CLAVE" : valor
    
            let edadBorrado = localStorage.removeItem("EDAD", edadValor)
            console.log(edadBorrado); // se borra la clave : valor
        

        /// PELICULA ///
            let peliculaElegida = PELICULA.value;
            mostrarPelicula.textContent = `PELICULA: ${peliculaElegida}`;
            localStorage.setItem("PELICULA", peliculaElegida); // "CLAVE" : valor
        
        
        /// DIMENSION ///
            let dimensionValor = DIMENSION.value;
            if (dimensionValor != "3d" && dimensionValor != "3D" && dimensionValor != "4d" && dimensionValor != "4D") {
                mostrarDimension.textContent = `DIMENSION: INCORRECTA`;
                
                Swal.fire("Tenes que elegir 3d o 4d, Cualquier otro valor se tomará como incorrecto");
                setInterval(() => {
                    console.log('Dimension no valida.');
                }, 7000);

            }else{
                mostrarDimension.textContent = `DIMENSION: ${dimensionValor}`;
            }
            localStorage.setItem("DIMENSION", dimensionValor); // "CLAVE" : valor
        
        
        /// COMIDA ///
            let comidaValor = txtArea.value;
            mostrarComida.textContent = `COMIDA: ${comidaValor}`;
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
            
            form.reset();
        })  
