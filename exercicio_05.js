// Lidar com numeros em Js pode dar muita dor de cabeça. Você ja viu o que acontece 
// quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 
// 0.300000004. Outra coisa importante de observar, é o fato que o ponto a utilizado
// no lugar da virgula e vice-versa. Com isso, vamos fazer um exercicio simples para 
// mostrar dinheiro sempre da forma correta. Desenvolva uma função para que ela receba
// um valor como 0.300000004 e retorne R$0,30( observe a virgura)

function conversao(valorDecimal){
    let valorEmReais =  `R$ ${valorDecimal.toFixed(2).toString().replace(".",",")}`
    console.log (valorEmReais)
}

conversao(0.1 + 0.2)