function suma (fn, ...rest){
    const resultado = rest.reduce((acc, ele) => acc + ele, 0 );
    fn(resultado)
}

suma(resultado => {
    console.log(resultado);
}, 1,2,3,4) ;