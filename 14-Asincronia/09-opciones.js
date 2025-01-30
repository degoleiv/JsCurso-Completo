// Apis
/**
 * Listar /GET ID
 * Crear /POST {}
 * Actualizar /PUT /PATCH ID {}
 * Eliminar /DELETE ID
 * */ 


const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url, {
    method:'POST', //PUT, PATCH, DELETE, GET (valor por defecto en get)
    body:JSON.stringify({title:'Hola mundo'}), //es necesario convertir primero a json
    headers:{
        'Content-Type':'application/json', //especificar que se envian json
        Authorization: 'api key',

    },
    cache: 'no-cache' // default, reload, force-cache, only-if-cached
})
    .then(response => {
        
        if(!response.ok){ 
            return Promise.reject('algo salio mal');
        }
        response.json()
    }) //reponse.text() para texto plano
    .then(data => console.log(data))
    .catch(err => console.log(err));