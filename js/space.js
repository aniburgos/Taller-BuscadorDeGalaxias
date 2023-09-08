

document.addEventListener("DOMContentLoaded", () => {

    let btnBuscar = document.getElementById("btnBuscar")
    btnBuscar.addEventListener("click", () => {
        let inputBuscar = document.getElementById("inputBuscar").value.toLowerCase()
        let contenedor = document.getElementById("contenedor")
        let url = `https://images-api.nasa.gov/search?q=${inputBuscar}`
        fetch(url)
            .then(response => response.json())
            .then(data => { 
let datos = ""
                for (let i = 0; i < url.length; i++) {
                    let dato = url[i];
                    datos += `
                            <div class="card-body">
                                <div class="img">
                                <h3 class="card-title">${data.collection.items[i].data[0].title}</h3>
                                    <img src="${data.collection.items[i].links[0].href}" class="card-img-top" alt="galaxia">
                                </div>
                                <div class="info">
                                    
                                    <p>Fecha: ${data.collection.items[i].data[0].date_created}</p>
                                    <p>Descripción: ${data.collection.items[i].data[0].description}</p>
                                </div>
                            </div>`;
                }

                contenedor.innerHTML = datos
            })
    })
})