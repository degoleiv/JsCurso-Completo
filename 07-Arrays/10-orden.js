//? ordenarlos
let numeros = [5, 4, 3, 2, 1];
// organizar los numeros de menor a mayor
numeros.sort();
// organizarlos a la inversa
numeros.reverse();

// organizando caracteres
let letras = ["z", "a", "e"];
letras.sort();

// "errores" este organiza segun el codigo ascii lo que implica que las mayusculas se encuentran antes de las minusculas
let conMay = ["Z", "a", "e"];
// funcion para solucionar esto
conMay.sort((a, b) => {
  /**
   * a antes b => -1
   * b antes a => 1
   * si son iguales => 0
   */
  let alower = a.toLowerCase();
  let blower = b.toLowerCase();
  if (alower < blower) {
    return -1;
  }
  if (alower > blower) {
    return 1;
  }
  return 0;
});

let usuarios = [
  { name: "diana", edad: 23 },
  { name: "chris", edad: 24 },
  { name: "dego", edad: 25 },
];

usuarios.sort((a, b) => {
  if (a.edad < b.edad) return -1;
  if (a.edad > b.edad) return 1;
  return 0;
});
