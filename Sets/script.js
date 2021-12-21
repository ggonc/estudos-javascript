const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(param) {
    const novaArray = new Set(param);
    return [...novaArray];
}

console.log(valoresUnicos(array));
