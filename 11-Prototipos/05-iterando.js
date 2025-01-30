function User (){
    this.name = 'Hola Mundo';

}
User.prototype.login = function (){
    console.log('Iniciando Sesion', this.name);
}

let user = new User ();

// iterar las propiedades 
/**se itera todas las propiedades ademas de l prototipo pero no escala en la cadena */
for (let prop in user)
    console.log(prop)


// iterar las propiedades sin entrar en el prototipo 
for (let prop in user)
    if(!user.hasOwnProperty(prop))
        console.log(prop)


console.log(Object.keys(user));