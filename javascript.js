/* TOMANDO LOS ELEMENTOS ID CON doc.GET ELEMENT BY ID */
    let DNI = document.getElementById("input1");
    let EDAD = document.getElementById("input2");
    let PELICULA = document.getElementById("input3");
    let DIMENSION = document.getElementById("input4");
    let txtArea = document.getElementById("txtArea");
    let ENVIAR = document.getElementById("submit");


/// DNI ///
    /* Se agrega el evento de click */
    ENVIAR.addEventListener("click", function(){
        /* se guarda el valor en una variable, entrando a la propiedad "VALUE" */
        let dniValor = parseInt(DNI.value); /* input devuelve cadena por eso se parseInt*/

        if(dniValor > 0 &&  dniValor <= 99999999){
            alert(`Ingresaste el dni: ${dniValor}`);
        }else {
            alert('Volve a ingresar el DNI de nuevo');
        }
    })


/// EDAD ///
    ENVIAR.addEventListener("click", function(){
        let edadValor = parseInt(EDAD.value);
        if(edadValor >= 18){
            alert(`tenes ${edadValor} sos mayor`);
        }else{
            alert(`sos menor, no podes ingresar`);
        }
        return 0;
    });
/// PELICULA ///
    ENVIAR.addEventListener("click", function(){
        let peliculaElegida = PELICULA.value;

        alert(`elegiste ${peliculaElegida}`);
    });
/// DIMENSION ///
    ENVIAR.addEventListener("click", function(){
        let dimensionValor = DIMENSION.value;

        if (dimensionValor == "3D" || dimensionValor == "4D"){
            alert(`ingresaste ${dimensionValor}.`);
        }
    });

/// COMIDA ///
    ENVIAR.addEventListener("click", function(){
        let comidaValor = txtArea.value;
    });