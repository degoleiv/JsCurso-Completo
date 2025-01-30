
let user = 'chanchito feliz';
let promesa1 = new Promise((res,rej)=>{
    console.log(user);
    res(user);
}  );

// pasar argumentos a una promesa de algun tipo  

let promesa2 = user => new Promise((res,rej)=>{
    console.log(user);
    res(15);
});

// llamar a la promesa con argumentos
promesa2("nombre de usuario")
    .then((res)=>console.log(res));
