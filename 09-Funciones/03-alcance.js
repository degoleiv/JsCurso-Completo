
let afuera = "estoy afuera";

function alcance () {

    afuera = "estoy adentro";
    // se hara hoisting dentro del alcance de la funcion lo que no afectara el window de los navegadores 
    console.log(saludo);
    console.log(variable_var);
    console.log(constante);
    console.log(variable);
    function saludo (){}
    var variable_var = "";
    const constante = "";
    let variable = "";
    // en este contexto se pueden llamar de manera normal
    console.log(saludo);
    console.log(variable_var);
    console.log(constante);
    console.log(variable);
    


}
// la variables globales se permiten acceder desde alcances locales

console.log(afuera);
alcance();
console.log(afuera);
