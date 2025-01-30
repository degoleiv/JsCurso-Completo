
console.log(restar); //Hoisting -> Izar o levantar



//* declaracion de funcion 

//Funcion nombrada -> Named Function
function suma () {
    console.log('funcion nombrada');
}

// Funcion Anonima -> Anonymous Function

// function (){
//     console.log('Funcion Anonima');
// }

//*Expresion de funciones -> function expression

//Expresion de Funcion nombrada -> Named Function Expression
let multiplica  = function multi (){
    console.log("multiplicando");
};

//anonymous function expresion
let resta = function (){ 
    console.log("restando");
};

// anonima
const divide = () => {
    console.log("dividiendo");
}