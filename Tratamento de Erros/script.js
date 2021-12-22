const meuArray = [1, 2, 4, 5, 2];

function validaErro(array, tamanho) {
    try {
        if(!array && !tamanho) throw new ReferenceError("Envie os parâmetros");
        if(typeof array !== "object") throw new TypeError("O array deve ser do tipo objeto");
        if(typeof tamanho !== "number") throw new TypeError("Tamanho deve ser do tipo número");
        if(array.length !== tamanho) throw new RangeError("Tamanho inválido");
        return array;
    } catch (error) {
        if (error instanceof ReferenceError){
            console.log("Este é um ReferenceError!");
            console.log(error.message);
        } else if (error instanceof TypeError){
            console.log("Este é um TypeError!");
            console.log(error.message);
        } else if (error instanceof RangeError){
            console.log("Este é um RangeError!");
            console.log(error.message);
        } else {
            console.log("Tipo de erro não esperado: " + error);
        }
    }
}

console.log(validaErro(meuArray));