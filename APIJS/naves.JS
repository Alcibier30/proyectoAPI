//Llamados HTTP GET a la URL enviada por parámetro
fetch("https://swapi.co/api/starships/")
    .then(function(response) {
        console.log("Estuvo bien la petición :D  ")
        console.log("Respuesta: ", response)
        response.json().then(function(data) {
            console.log(data)
            document.getElementById("navesespaciales").innerHTML = "<h1>" + data.name + "</h1>"
        })
    })
    .catch(function() {
        console.log("Algo salió mal :(  ")
    })

async function obtenerNave(id) {
    let response = await fetch(`https://swapi.co/api/starships/${id}/`)
    let data = await response.json()
    return data
}

async function obtenerDatos(url) {
    let response = await fetch(url)
    let data = await response.json()
    return data
}

/**
 * Retorna una cadena HTML con una lista de personajes y un botón de anterior y siguiente si recibe las URL
 * @param {string} url API a ser ejecutada 
 */
async function listarNaves(url) {
    let lista = `<ul class="collection with-header">
      <li class="collection-header red lighten-2"><h4> NAVES ESPACIALES DE STARWARS.</h4></li>`
    let Naves = await obtenerDatos(url)
        //let arregloPersonajes = personajes.results //Forma 1 de recorrer el arreglo de resultados
        // for (let i = 0; i < arregloPersonajes.length; i++) {
        //     lista += `<li class="collection-item">
        //     <div>${arregloPersonajes[i].name}</div></li>`
        // }
    let numeroPersonaje = 1;
    for (const nave of Naves.results) { //Forma 2 de recorrer el arreglo de resultados
        lista += `<li class="collection-item" style = "background-color: lightgreen;">
         <div><strong>${numeroPersonaje}. Nombre:</strong> ${nave.name}. <strong> Modelo: </strong> ${nave.model} 
         <strong> Fabricante: </strong> ${nave.manufacturer} <strong> Longitud: </strong> ${nave.length} 
         <strong> Pasajeros: </strong> ${nave.passengers} </div> </li>`
        numeroPersonaje++
    }
    lista += '</ul><div class="row">'
    if (Naves.previous) { //Agregar un botón pata la página anterior
        lista += `<div class="col s6"><a id ="btn-anterior" 
                class="waves-effect waves-light btn purple"
                data-url="${Naves.previous}"><i class="material-icons left">skip_previous</i>Anterior</a></div>`
    }
    if (Naves.next) { //Agregar un botón pata la página siguiente
        lista += `<div class="col s6"><a id ="btn-siguiente" 
                class="waves-effect waves-light btn green"
                data-url="${Naves.next}"><i class="material-icons right">skip_next</i>Siguiente</a></div></div>`
    }
    return lista
}

async function main(url) {
    let lista = await listarNaves(url)
    document.getElementById("navesespaciales").innerHTML = lista
    let btnSiguiente = document.getElementById("btn-siguiente")
    let btnAnterior = document.getElementById("btn-anterior")
    if (btnSiguiente) {
        btnSiguiente.addEventListener("click", function() {
            main(this.dataset.url)
        })
    }
    if (btnAnterior) {
        btnAnterior.addEventListener("click", function() {
            main(this.dataset.url)
        })
    }
}

main('https://swapi.co/api/starships')