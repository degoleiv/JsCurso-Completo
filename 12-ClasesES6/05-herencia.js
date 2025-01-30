
//clase padre de entidad
class Entidad {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}
//clase hija de entidad

class Persona extends Entidad {
    constructor(nombre, edad, apellidos) {
        super(nombre, edad);
        this.apellidos = apellidos;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre} ${this.apellidos}`);
    }
}

