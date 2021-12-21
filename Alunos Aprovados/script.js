const alunos = {
    nome: ["João", "Carolina", "Henrique", "Amanda"],
    nota: [3, 7, 6, 0]
}; 

function alunosAprovados(alunos, media){
    let aprovados = [];
    for(let i = 0; i < alunos.nome.length; i++){
        if(alunos.nota[i] >= media){
            aprovados.push(alunos.nome[i]);
        }
    }
    return aprovados;
};
console.log(alunosAprovados(alunos, 6));