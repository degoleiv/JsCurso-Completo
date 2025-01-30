// devuelve una promesa, recibe dos argumentos url y opciones de configuracion
const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
    .then(response => {
        
        if(!response.ok){ //devolvera falso si el estado de la respuesta no se encuentra entre (200 y 299)
            return Promise.reject('algo salio mal');
        }
        response.json()
    }) //reponse.text() para texto plano
    .then(data => console.log(data))
    .catch(err => console.log(err));

// fetch siempre va a tener exito
