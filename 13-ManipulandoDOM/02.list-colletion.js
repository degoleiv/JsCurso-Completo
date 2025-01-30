let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');

console.log(collection, list);

//accediendo a los elementos de la coleccion
let item1 = collection.namedItem('name');
let item2 = collection.item(0);
let item3 = collection[3];

// la forma de iterar una coleccion es similar a un arreglo
collection.array.forEach(element => {
    
});

for (let el of collection) {
    const element = collection[i];
}

Array.from(collection).forEach(element => {
    
});

[...collection].forEach(element => {
    console.log(element);
});


let itemList1 = list.item(3);
let itemList2 = list.item[3];

list.forEach(element => {    
console.log(element);});

let entries = list.entries(); // retorna un iterador
let keys = list.keys(); // retorna un iterador
let values = list.values(); // retorna un iterador
[...list].forEach(([index, element]) => {    console.log(index, element);});     