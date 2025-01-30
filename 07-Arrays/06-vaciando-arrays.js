
//? Vaciar un array 
        // let arr = [1,2];
        // arr = [];
        // esta forma no es recomendada si le asignamos el valor a otro array
        
        // let arr = [1,2];
        // arr2 = arr;
        // arr = [];
        // console.log(arr2, arr)
        
        
        //* manipulando la longitud
        // let arr = [1,2];
        // arr.length = 0;
        // console.log(arr);
        
        
        //* aplicando splice
        let arr = [1,2];
        arr.splice(0, arr.length);
        
        
        //!nada recomenda (lenta y usando recursos)
        // let arr = [1,2];
        // while (arr.length > 0){
        //     arr.pop();
        // }
