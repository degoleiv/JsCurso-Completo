//?arrow-function
// function hola () {
//     return 'Hola mundo';
// }
//funciion anonima o lambda (arrow function) 
const hola = () => {
    return 'Hola mundo';
};

// return implicito
// si nuestra arrow function es de solo una linea
hola = () => 'Hola mundo';

// parameters
// solo un parametro
hola = mensaje => mensaje + 'Hola mundo';

// varios
hola = (mensaje, mensaje2) => mensaje + 'Hola mundo';



const resultado = hola();