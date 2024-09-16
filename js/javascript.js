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
    
            // validar que dimensionValor no sea de importancia la mayuscula y que a su vez ingrese si o si alguna de las 2 opciones
            if (dimensionValor != "3d" && dimensionValor != "3D" && dimensionValor != "4d" && dimensionValor != "4D") {
                mostrarDimension.textContent = `DIMENSION: INCORRECTA`;

                setInterval(() => {
                    console.log('Dimension no valida.');
                }, 7000);

                alert('Tenes que elegir 3d o 4d, Cualquier otro valor se tomara como incorrecto')
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


/* Fetch */
// Hace una solicitud HTTP a la URL especificada y devuelve una promesa
fetch('https://raw.githubusercontent.com/yoelysfigueredopadron/JSON/main/productos-cosmocurio.json')

//Este primer then() maneja la respuesta de la solicitud. 
    //normalmente verificamos si la respuesta fue exitosa o fallida
    //Utilizamos métodos como .json() para transformar la respuesta en un formato utilizable
.then(response => response.json()) // obtener los datos directamente de la respuesta

    //(los datos en formato JSON) se pasa como argumento a esta segunda función then()
    //donde se puede trabajar con los datos. Como por ej el table
.then(data => console.table(data)) // toma los valores del anterior then y los muestra en table
/* API rest y peticiones */
/* Ejemplos de peticiones y asincronismo */


// PROMESAS Y LIBRERIAS
/* Promesas */
/* Fetch y primesas */
/* Librerias */
/* Luxon y sweet alert ejemplos */

// Proximos pasos
/* Introduccion a Frameworks */
/* Iniciar poryectos con NPM */
/* Paradigmas en programacion */
/* Analisis frameworks Frontend */
