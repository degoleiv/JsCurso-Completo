//Dentro de un Objeto : this hace referencia a un objeto 
// En una funcion : this hace referencia al objeto window, si es node a global
// si se usa new hace referencia al objeto que sera creado


const user = {
    name: 'Nicolas',
    login (){
        console.log(this);
    }
}

user.logout = function (){
    console.log(this);
}

user.logout();



function log (){
    console.log(this);
}

log();

/**
 * se crea un objeto literal
 * se vincula este objeto a this 
 * se vincula el prototipo
 * si no retorna nada, entonces retorna this
*/

function Log (mensaje){
    this.mensaje = mensaje;
    console.log(this);
}

const l = new Log('Hola mundo')