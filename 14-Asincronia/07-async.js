let promesa1 = param1 => new Promise((res,rej)=>{
    res(param1);
});


let promesa2 = param2 => new Promise((res,rej)=>{
    res(param2);
});

let promesa3 = (a,b) => new Promise((res,rej)=>{
    res('Se resolvieron todas las promesas ');
});





//AntiPatron: triangulo de la tortura o piramide de la muerte 

/* Promise.resolve('Primer valor')
.then( a => { 
     return promesa1(a)
         .then( b => {
            return promesa2(b)
                .then( (a,b) => promesa3(a,b));
        });
}); */

// Solucionar el triangulo de la tortura (forma manual)

/* Promise.resolve('Primer valor')
.then( a => promesa1(a))
.then( b => promesa2(b))
.then(contexto => promesa3(contexto)); */ 


// manera elegante
/* await va a asignar el valor de la resolucion de las promesas */

async function main(){
    // no podemos llamar a catch en una funcion asincrona

    try{
        const a = await Promise.resolve('Primer valor');
        const b = await promesa1(a);
        const c = await promesa2(b);
        const resultado = await promesa3(b,c);
    }
    catch(err){
        console.log(err);
    }
}

main(); 