

let id;
function createDraggable(){
    let span = document.createElement('span');
    span.id= 'draggable';
    span.innerText = 'Drag me!';
    span.draggable = true;
    span.ondragstart = e => 
        {
            id = e.target.id;
        }
    
    document.body.append(span);
    
};

function createDraggableArea(){

    let dropArea = document.createElement('div');
    dropArea.className = 'drop';
    dropArea.ondragenter = e => {
        e.preventDefault();
        dropArea.style.background = 'yellow';
    };
    
    dropArea.ondragleave = e => { 
        e.preventDefault();
        dropArea.style.background = 'white';
    };
    dropArea.ondragover = e => {
        e.preventDefault();}

    dropArea.ondrop = e => {
        e.preventDefault();
        dropArea.style.background = 'white';
        let draggable = document.getElementById('draggable');
        dropArea.append(draggable);
    }
}

createDraggable();
createDraggableArea();




document.body.append(dropArea);

