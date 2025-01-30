// promesas 

/**
 * pendiente pending
 * rechazada reyected
 * terminada fullfilled
 */

//usados comunmente para:
/**
 * consultas a bases de datos
 * peticiones a servidores
 * webworkers
 */


//se cran una instancia de un constructor de promesa 
// recibe dos parametros que son funciones 
// y una funcion que es la promesa que se debe resolver

let promesa = new Promise((resolve, reject)=>{
    //resolve(42); fullfilled
    //setTimeout(()=>resolve(42), 1000); pending
    //reject(new Error('error')); rejected
});


const success = response => console.log(response);
const error = err => console.error(err);    

promesa.then(success,error);