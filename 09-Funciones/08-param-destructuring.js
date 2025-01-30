



// obtener solo el parametro que necesitamos del objeto 

function webserver ({ url }) {
    // const { url } = config;
    return url;
}

console.log(webserver({url: 'https://dego.com'}));

// se puede con listas 
function webserverlist ([url, port, buket]) {
    // const [url, port, buket] = config;
    return url;
}
console.log(['http://.com', 148, 80]);
