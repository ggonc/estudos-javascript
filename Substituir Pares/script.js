function substituiPares(array){
    if(!array) return "Erro!";

    if(array.length !== 0){
        for (let i = 0; i < array.length; i++){
            if (array[i] % 2 === 0 && array[i] !== 0){
                array[i] = 0;
            }
        }
        return array;
    } else {
        return -1;
    }
}

let array = [0, 1, 2, 3, 4, 5, 6]
console.log(substituiPares(array));
