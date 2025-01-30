
// cuando se crean clases UpperCamelCase - PascalCase
// {id:1, recuperarClave: function (){}}
function Usuario (){
    this.id = 1;
    this.recuperarClave = function (){ // las funciones dentro de objetos se llaman metodos 
        console.log('Recuperando Clave');
    }
    
}
/**
 * funcionamiento "new"
 * 1.se crea un objeto {}
 * 2.se vincula el prototipo con el objeto recien creado
 * 3.se asigna el objeto vacio a this 
 * 4.si no retorna nada, retornara this 
 */
let usuario = new Usuario();
