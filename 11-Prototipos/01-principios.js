//Encapsulamiento
const user = {
    nombre : 'Hola',
    apellido: 'Mundo',
    getNombreCompleto(){
        return [this.nombre, this.apellido].join(' ');
    }
}

console.log(user.nombre);

// Abstracción

const user2 = new User();
user.password = 'Chanchito feliz';
user.save();



// Herencia
User :id, name, guardar()
Restaurante: id, name, guardar()
Motociclista: id, name, guardar()

// Polimorfismo

function validaEntidad(entidad){
    //....
}

switch(entidad.nombre){
    case 'user':
        entidad.save();
        break;
    
    case 'restaurante':
        entidad.guardar();
        break;
    
    case 'moto':
        entidad.salvar();
        break;
    
}

// X

entidad.guardar();