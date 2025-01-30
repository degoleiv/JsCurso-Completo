let pairs = [
  [1, { name: "Nicolas" }],
  [2, { name: "Felipe" }],
  [3, { name: "Chanchito" }],
];

function toCollection(arr) {
  let collection = [];
  for (idx in arr) {
    let elemento = arr[idx];
    elemento[1].id = elemento[0];
    collection[idx] = elemento[1];
  }
  return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);
