
// prototipos vs instancias 
function User(){
    this.name = 'hola Mundo';
    // metodo de instancia
    this.logger = function (){
        console.log('loggueando...');
      
    }
}




// al instanciar se hace con la palabra reservada con new
const user1 = new User ();
const user2 = new User ();


// se estan creando objetos o metodos distintos 
// console.log(user1.login === user2.login); //false

// metodo de prototipo
// se agregara al prototipo la funcion y se evita crear una funcion por cada instancia, si no que se deja en el prototipe de el objeto 
User.prototype.login = function (){
    console.log('iniciando sesión');
    // this accede al objeto de la instancia
    this.logger();

}


// intereceptar metodos del prototipe 


User.prototype.toString = function (){
    console.log('se intercepto este metodo antes de llegar');
};


user1.login();
