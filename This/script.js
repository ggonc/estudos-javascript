const pessoaUm = {
    nome: "Guilherme",
    idade: 23  
};

const pessoaDois = {
    nome: "João",
    idade: 36
};

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
            this.idade + anos
    } anos de idade.`;
}

console.log(calculaIdade.call(pessoaDois, 20));
