let promesa1 = new Promise((res,rej)=>{
    res(12);
});

let promesa2 = new Promise((res,rej)=>{
    res(15);
});

promesa1.then((res)=>{
    console.log(res);
    // return res + 18;
    if(valor > 10){
        return promesa2;
    }
}).then((res2)=>{
    // console.log('segundo then');
    return res2;
})

