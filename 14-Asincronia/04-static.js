let promesa1 = new Promise((res,rej)=>{
    res(12);
});

let promesa2 = new Promise((res,rej)=>{
    res(15);
});
// se usa para no romper la cadena de promesas o darle un flujo predeterminado
promesa1.then((res)=>{
    console.log(res);
    // return res + 18;
    if(valor > 10){
        return promesa2;
    }
    Promise.resolve('resolver el valor de la promesa');
    // crear una promesa que falle desde el incio 
    return Promise.reject('error');
}).then((res2)=>{
    // console.log('segundo then');
    return res2;
}).catch((err)=>{
    // SE EJECUTA CUANDO FALLA ALGUNA PROMESA 
    console.log(err);
}).finally(()=>{
    // FINALLY NUCA RECIBE UN ARGUMENTO
    console.log('finalizo');
})
