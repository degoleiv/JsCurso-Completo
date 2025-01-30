let render = ({errors, data}) => {
    return `
    <form id="mi formulario">
        <div>
        <label for="nombre">Nombre:</label>
        <input type="text" name="name" value="${data.name || ''}">
        </div>

        <div>
        <label for="apellido">Apellido:</label>
        <input type="text" name="lastname" value="${data.lastname || ''}">
        </div>

        <button>Enviar</button>
    </form>
    
    `;
};

let initialsValues = { name: '', lastname: ''};
let form = document.createElement('form');
form.innerHTML = render({errors, initialsValues });
document.body.append(form);




function validate (data){
    let error = {};

    if(!data.name){
        error.name = 'El nombre es requerido';
    }

    
    if(!data.lastname){
        error.name = 'El apellido es requerido';
    }
    return error;
}


form.addEventListener('submit', e => {
    e.preventDefault();
    let data = Array.from(e.target.elements).reduce((acc, el) => {
        if (!el.name) return acc;   
        acc[el.name] = el.value;

        return acc;
    }, {});

    console.log(data);
    const errors = validate(data);
    console.log(errors);

    if(error.keys(errors).length > 0){
        let html = render({errors, data});
        form.innerHTML = html;
        return;
        }
    //utilizar promesas para enviar los datos

    
});

