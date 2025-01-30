function ordenar (texto, fn){
    const caracteres = texto.toLowerCase()
        .replace(' ', '')
        .split('')
        .sort()
        .join('')
    fn(caracteres)

}


ordenar('hola mundo', console.log);