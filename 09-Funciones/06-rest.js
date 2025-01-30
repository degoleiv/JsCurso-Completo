


const resta = (a, b, ...rest)=>{
    // acceder al resto de argumentos 
    console.log(rest); 
}


function suma (a, b, ...rest){
    // acceder al resto de argumentos 
    console.log(rest); 
}
suma(1,2,3,4);
resta (1,2,3,4);

const logMsg = (desc, ...msgs) => {
    for (let msg of msgs) {
        console.log(desc, msg)
    }
}
// logMsg('Servidor:', 'erro1', 'peticion aceptada', 'socket activo');
let mensajes = ['erro1', 'peticion aceptada', 'socket activo'];
logMsg('Cliente Movil:', ...mensajes, 'Otro Error!');
