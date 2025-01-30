/**
 * {
 * url: ...
 * bucket: amazon S3
 * port: 80
 * }
 */


// function consfigurarApi (url){
//     const defaultUrl = url || 'https://dego.io';
//     return `${defaultUrl}`
// }

// const config = {
// url : 'https://dego.io',
// }

// function consfigurarApi ({ url } = {url: 'por defecto'}){

//     return `${url}`
// }

// si se define un valor por defecto, los siguieter parametros debe tener un valor por defecto para evitar errores
function consfigurarApi (url, bucket= 145, port){

        return `${url}/${bucket}:${port}`
    }

console.log(consfigurarApi('dego.io', 80));
