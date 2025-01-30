// si deseo hacer otro objeto con la misma estructura 
// example : 
let user = {
    id:1,
    email : 'degocyx1211@gmail.com',
    name : 'dego',
    estado: true,
    recuperarClave : function (){
        console.log('recuperando archivo')
    },   
}


// por convencion se dejan la sfactory functions con camel case y iniciando con crear
function crearUsuario (name, email) {
    return  {
        email,
        name,
        estado: true,
        recuperarClave : function (){
            console.log('recuperando archivo')
        },   
    }   
}

let user1 = crearUsuario ('Dego', 'degocyx1211@gmail.com');
let user2 = crearUsuario ('Diana', 'diana7170368@gmail.com');
let user3 = crearUsuario ('weirdworld', 'weirdworld@gmail.com');


