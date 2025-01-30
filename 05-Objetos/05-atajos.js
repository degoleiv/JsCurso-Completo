// esto es un atajo de js (azucar sintatica)
// estas dos declaraciones son iguales 
let obj = {};

let obj1 = new Object();
/**
 * new Array []; []
 * new String(); "" '' ``
 * new Number(); 12
 * new Boolean();  true - false
 */


function Usuario (){
    this.name = "Dego saluda al mundo";
}

let user = new Usuario ();
console.log(user.constructor);

// al usar literales js va a envolver al objeto creado en uno del tipo correspondiente y despues desemvolverlo 

// por eso podemos acceder a metodos que son pertenecientes a un objeto literal


const  s1 = "1 + 1";
const  s2 = new String ("1 + 1");

// en el caso de String por constructor no se envuelve (para visualizar de mejor manera )
console.log(s1); // 1 + 1
console.log(s2); // String {"1 + 1"}
console.log(eval(s1)); // 2
console.log(eval(s2)); // String {"1 + 1"}


/**RECOMENDACIONES :
 * no usar constructores de objetos para crear estas variables, usar literales 
 * en caso de ser necesario y obligatorio entonces usar el metodo .ValueOf()
 */