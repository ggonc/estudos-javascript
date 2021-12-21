function calculadora(){
    const operacao = prompt('Escolha uma operação:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão real (/)\n5 - Divisão Inteira (%)\n6 - Potenciação (**)');

    if (operacao >= 1 && operacao <= 6) {
        
        let n1 = number(prompt('Insira o primeiro valor: '));
        let n2 = number(prompt('Insira o segundo valor: '));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - Parâmetros inválidos');
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`${n1} % ${n2} = ${resultado}`);
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} ^ ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
    
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!');
                } else {
                    alert('Digite uma opção válida!')
                    novaOperacao();
                }
            }
        }

        switch(operacao){
            case 1:
                soma();
            break;
            case 2:
                subtracao();
            break;
            case 3:
                multiplicacao();
            break;
            case 4:
                divisaoReal();
            break;
            case 5:
                divisaoInteira();
            break;
            case 6:
                potenciacao();
            break;
        }

    } else {
        alert('Erro - Operação inválida!');
        calculadora();
    }

    
}


calculadora();