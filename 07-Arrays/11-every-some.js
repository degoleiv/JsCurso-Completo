let usuarios = [
{id:1, activo:true},
{id:2, activo:false},
{id:3, activo:false},

];

//se hace un corto circuito si encuentra false, y no ejecuta mas 
let todos = usuarios.every(u => {
    console.log('todos activos', u.id);
    return u.activo;
})

//si encontramos alguno en true se ejecuta un corto circuito si encuentra algun true 
let alguno = usuarios.some(u => {
    console.log('alguno activo', u.id);
    return u.activo;
})

