const usuario = {
    nombre : 'Chanchito',
    apellido : 'Feliz',

    nombreCompleto : function (){

        return `${usuario.nombre} ${usuario.apellido}`
    },
    // podemos eliminar function y los dos puntos
    completo  (){

        return `${usuario.nombre} ${usuario.apellido}`
    },
    //getter 
    get usuario (){
        return `${usuario.nombre} ${usuario.apellido}`
    },
    set usuario (valor){

        const [nombre, apellido] = valor.split(' ');
        nombre = nombre;
        apellido = apellido;

   }

}

console.log(usuario.nombreCompleto());
console.log(usuario.completo());
