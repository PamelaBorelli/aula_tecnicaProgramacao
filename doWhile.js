function inteiroAleatorio (num){
    const valor = Math.random() * num
    return Math.floor(valor)
}
 let opcao = 0

 do {
    opcao= inteiroAleatorio(15)
    console.log(`Opção escolhida foi ${opcao}`)

 }while(opcao !=1)

 console.log ("Fim!!")