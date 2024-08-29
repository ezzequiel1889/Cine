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
    alert("tu dni: " + dniValor + " y tu edad: " + edadValor + " coinciden perfecto");
}


/// DNI ///
/* Se agrega el evento de click */
ENVIAR.addEventListener("click", function(){
        /// DNI ///
        event.preventDefault();
        let dniValor = parseInt(DNI.value); /* input devuelve cadena por eso se parseInt*/
            /* se guarda el valor en una variable, entrando a la propiedad "VALUE" */
            if(dniValor > 999999 &&  dniValor <= 99999999){
                alert(`Ingresaste el dni: ${dniValor}`);
            }else {
                alert('Ingrese un DNI valido.');
            }
            mostrarDni.textContent = `DNI: ${dniValor}`;
            localStorage.setItem("DNI", dniValor); // "CLAVE" : valor
        
        /// EDAD ///
            let edadValor = parseInt(EDAD.value);
            if(edadValor >= 18){
                alert(`tenes ${edadValor} sos mayor`);
            }else{
                alert(`sos menor, no podes ingresar`);
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
    
            if (dimensionValor == "3D" || dimensionValor == "4D"){
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
            /* infoObj es tomado como un OBJETO, 
             para que el localStorage lo pueda leer 
             en string hay que aplicar el JSON.stringify()
             */
            localStorage.setItem("todaInformacion", JSON.stringify(infoObj));
            // ahora pasa a ser un string para el localStorage
            // Ya pasado a string, se puede ver en consola el obj
            console.log(infoObj);
            
            /* funcion de dni y edad */
            datosUsuario(dniValor,edadValor);
    })  


    

// /* LOCAL STORAGE GET Y CLEAR ITEM */    
// let comidaItem = localStorage.getItem("COMIDA");
// alert(comidaItem); // muestra el valor de la clave
