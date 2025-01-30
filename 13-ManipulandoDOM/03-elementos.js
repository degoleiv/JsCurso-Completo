
//creando elementos html
let el = document.createElement('p');
el.innerHTML = "elemento creado";
document.body.appendChild(el);


//no interpteta las etiquetas html
el.innerText = "<ul><li>elemento creado</li></ul>";
//asi se insertan tag
el.innerHTML = "<ul><li>elemento creado</li></ul>";

//agregando atributos
el.style = 'background-color: red; color: white;';
el.className = 'clase1 clase2';
el.id = 'id1';
//no contiene propiedad personalizada
el.mipropiedad = 'mi valor';
//tener cuidado con el set atribute ya que se puede sobreescribir
el.setAttribute('mipropiedad', 'mi valor');
el.getAttribute('mipropiedad');
el.hasAttribute('mipropiedad');

