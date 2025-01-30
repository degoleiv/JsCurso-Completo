// las funciones tambien son objetos en js (son objetos de primera clase)

function Usuario(nombre) {
  this.nombre = nombre;
}
// se puede acceder a sus propiedades
console.log(Usuario.name);
// se puede acceder a la longitud de parametros (o otros metodos heredados de objetos)
console.log(Usuario.length);

// se pueden asignar como valor a otras variables
const U = Usuario;
let user = new U("Nicolas");
console.log(user);
// se pueden pasar como parametros
function of(Fn, arg) {
  return new Fn(arg);
}
let user1 = of(Usuario, "chancho feliz");
console.log(user1);
// se pueden returnar dentro de otras funciones 

function returned () {
    return function (){
        console.log('Hola Mundo');
    }
}

let saludo = returned();
saludo();

