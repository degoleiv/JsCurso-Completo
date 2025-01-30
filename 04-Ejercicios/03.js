function elemento (array, idx) {
    if (idx < 0 || idx >= array.length){
        return 'el elemento no existe';
    }
    return array[idx];


};

const element = elemento ([0,1], 5);
console.log(element)