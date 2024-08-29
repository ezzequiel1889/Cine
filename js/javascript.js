/* TOMANDO LOS ELEMENTOS ID */
    let DNI = document.getElementById("input1");
    let EDAD = document.getElementById("input2");
    let PELICULA = document.getElementById("input3");
    let DIMENSION = document.getElementById("input4");
    let txtArea = document.getElementById("txtArea");
    let ENVIAR = document.getElementById("submit");

/* TOMANDO LOS ELEMENTOS PARA MOSTRAR LOS RESULTADOS */
    let mostrarDni = document.getElementById("listaDni");
    let mostrarEdad = document.getElementById("listaEdad");
    let mostrarPelicula = document.getElementById("listaPelicula");
    let mostrarDimension = document.getElementById("listaDimension");
    let mostrarComida = document.getElementById("listaComida");


/* FUNCION */
function datosUsuario(dniValor, edadValor){
    alert("tu dni:" + dniValor + "y tu edad:" + edadValor + "coinciden perfecto");
}


/// DNI ///
/* Se agrega el evento de click */
ENVIAR.addEventListener("click", function(){
    event.preventDefault();
    let dniValor = parseInt(DNI.value); /* input devuelve cadena por eso se parseInt*/
        /* se guarda el valor en una variable, entrando a la propiedad "VALUE" */
        if(dniValor > 0 &&  dniValor <= 99999999){
            alert(`Ingresaste el dni: ${dniValor}`);
        }else {
            alert('Volve a ingresar el DNI de nuevo');
            
        }
        mostrarDni.textContent = `${dniValor}`;
        localStorage.setItem("DNI", dniValor); // "CLAVE" : valor
    })  


    /// EDAD ///
    ENVIAR.addEventListener("click", function(){
        event.preventDefault();
        let edadValor = parseInt(EDAD.value);
        if(edadValor >= 18){
            alert(`tenes ${edadValor} sos mayor`);
        }else{
            alert(`sos menor, no podes ingresar`);
        }
        mostrarEdad.textContent = `${edadValor}`;

        localStorage.setItem("EDAD", edadValor); // "CLAVE" : valor



        let edadBorrado = localStorage.removeItem("EDAD", edadValor)
        console.log(edadBorrado); // se borra la clave : valor
    });
  
    
/// PELICULA ///
    ENVIAR.addEventListener("click", function(){
        event.preventDefault();
        let peliculaElegida = PELICULA.value;

        mostrarPelicula.textContent = `${peliculaElegida}`;
        localStorage.setItem("PELICULA", peliculaElegida); // "CLAVE" : valor
    });

/// DIMENSION ///
    ENVIAR.addEventListener("click", function(){
        event.preventDefault();
        let dimensionValor = DIMENSION.value;

        if (dimensionValor == "3D" || dimensionValor == "4D"){
            mostrarDimension.textContent = `${dimensionValor}`;
        }
        localStorage.setItem("DIMENSION", dimensionValor); // "CLAVE" : valor
    });

/// COMIDA ///
    ENVIAR.addEventListener("click", function(){
        event.preventDefault();
        let comidaValor = txtArea.value;
        mostrarComida.textContent = `${comidaValor}`;
        localStorage.setItem("COMIDA", comidaValor); // "CLAVE" : valor
    });
    

// /* LOCAL STORAGE GET Y CLEAR ITEM */    
// let comidaItem = localStorage.getItem("COMIDA");
// alert(comidaItem); // muestra el valor de la clave

let infoObj = {
    "dni" : dniValor,
    "edad" : edadValor,
    "pelicula" : peliculaElegida,
    "dimension" : dimensionValor,
    "comida" : comidaValor
}

localStorage.setItem(infoObj);