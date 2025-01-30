
//clase padre de entidad
const Entidad = {
    
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}
//clase hija de entidad

class User {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    save() {
        console.log(`Guardando usuario ${this.nombre}`);
    }
}

Object.setPrototypeOf(User.prototype, Entidad);


