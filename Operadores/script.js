function verifica(num1, num2){
    this.num1 = num1;
    this.num2 = num2;

    let igualdade = num1 === num2 ? "são iguais" : "não são iguais";
    let soma = num1 + num2;
    let maior10 = soma > 10 ? "maior que 10" : "menor que 10";
    let menor20 = soma < 20 ? "menor que 20" : "maior que 20";
    let contador = 0

    console.log(contador++)
    
    
    console.log(`Os números ${num1} e ${num2} ${igualdade}. Sua soma é ${soma}, que é ${maior10} e ${menor20}.`);
}