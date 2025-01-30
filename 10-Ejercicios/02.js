const obj = {
    nombre: 'Nicolas',
}

function extender (usuario){
    const metodos = {
        login :()=>{
            console.log("Iniciando sesion",this.nombre);
            
        },
        logout :()=>{
            console.log("cerrando sesion",this.nombre);
            
        },

    }
    
   
    return Object.assign(usuario, metodos);
}
const usuario = extender(obj);

console.log(usuario);
console.log(usuario.login());