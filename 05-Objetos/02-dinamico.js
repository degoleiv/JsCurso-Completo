// si usamos const quiere decir que no podremos cambiar el valor de la variable 

const user = {id: 1, name:'Dego'};
//ERROR NO SE PUEDE CAMBIAR EL VALOR
// user = [];

// Podemos modificar nuestro objeto
user.name = 'Luis';
user.guardar = function (){
    console.log('Guardando', user.name);
};

user.guardar();
// eliminar propiedades de un objeto 
delete user.name;
delete user.guardar;

// si quiero que no se pueda modificar un objeto
const user2 = Object.freeze(user);
// este objeto no se podra modificar 


// si quiero poder modificar las propiedades pero no eliminar ni agregar 
const user3 = Object.seal(user);


// 
console.log(user);