


const p1 = Promise.resolve(12);
const p2 = 42; //cualquier variable nativa se convierte en promesa al pasarla como promesa
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// ejecutar una porcion de codigo cuando todas las promesas se resuelvan
Promise.all([p1, p2, p3]).then(values => {
  console.log(values);
}).then(valores => console.log(valores)
//los valores son un array con las respuestas de las promesas
).catch(err => console.log(err));
// al terminar todas las promesas se ejecuta el then
// si falla alguna de las promesas se ejecuta el catch


//esperar que se resuelva la primera promesa o se rechace
Promise.race([p1, p2, p3]).then(valor => { 
})
.then(valor => console.log(valor))
.catch(err => console.log(err));



// se ejecuta cuando alguna de las promesas se resuelva, en caso de que alguna falle ejecuta la siguiente promesa
Promise.any([p1, p2, p3]).then(valor => {
  console.log(valor);
}).catch(err => console.log(err));  
// si fallan todas lanzara un error donde dice que todas las promesas fueron rechazadas


// devuelve el estado de las promesas por separado  , nunca ejecutara el catch
Promise.allSettled([p1, p2, p3]).then(values => {
  console.log(values);
}).then(valores => console.log(valores) ).catch(err => console.log(err));
