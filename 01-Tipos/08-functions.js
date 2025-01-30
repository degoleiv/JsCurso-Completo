function saludar (){
    console.log("hola mundo");
}

saludar ();
//return 
function saludar (){
    return 2+2;
}
console.log(saludar ()); // 4 devuelve el valor en return

//argumentos y parametros, 
//parametros
function suma (num1, num2 ){
    // se puede acceder a los argumentos como una lista 
    console.log(arguments);
    return num1 + num2;
}
//argumentos
console.log(suma (5, 4)); // 4 devuelve el valor en return


console.log(typeof suma);//function