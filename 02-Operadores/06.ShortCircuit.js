//short-circuit 
//Falso


/*falsy : {
false
0
''
null
undefined
NaN
}*/ 
//OR
let nombre = 'chancho';
let username = nombre || Anonimo; //si  la primera evalua false entonces la segunda
console.log(username);
//AND
let f1 = true;
let f2 = false;
//se provoca un corto circuito por que no se evalua el resto de la expresion
console.log(f1 && f2);



