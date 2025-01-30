const punto  = {
    x : 10,
    y : 5,
    dibujar (){
        console.log('dibujando');
    }
};

delete punto.dibujar;

// validar si contiene ese metodo o llave
if ('dibujar' in punto){
    punto.dibujar();
}

// obtener las propiedades del objeto

console.log(Object.keys(punto));

// recorrer las propiedades del objeto
for (let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
}

// recorrer tanto llave como valor (ANTIGUAMENTE) 
for (let entry of Object.entries (punto)){
    console.log(entry) //[key, value]
}

// recorrer tanto llave como valor (NUEVA)
for (let key in punto){
    console.log(key, punto[key]);
}



