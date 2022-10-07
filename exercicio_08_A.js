// O pedro joga N jogos de basquete por temporada, para saber como ele esta 
// progredindo, ele mantem registro de todas as pontuação  feitas por jogo. Apos cada 
// jogo ele anota no novo valor e confere se o mesmo é maior ou menor que o seu 
// meljor e pior  desempenho. Dada uma lista string , escrevauma função que ao 
// recebe-la


// function desempemho(pontuacao){
//     let maxNumber = pontuacao[0]

//     for (let i = 1; i < pontuacao.length; i++){
//         if (pontuacao [i]>maxNumber){
//             maxNumber = pontuacao[i]
//         }
//     }
// return maxNumber

// }

// console.log(desempemho([10,20,20,8,25,3,0,30]))

let pontuacao = [10,20,20,8,25,3,0,30]

function avaliacao (pontuacao){
    let qtQuebraRecord = 0
    let piorJog = 1
    let maiorPonto = pontuacao[0]
    let menorPonto = pontuacao[0]

    for (let i = 1; i < pontuacao.length; i++){
        if(pontuacao[i]> maiorPonto){
            maiorPonto = pontuacao[i]
            qtQuebraRecord ++
        }else if (pontuacao[i]< menorPonto){
            menorPonto = pontuacao[i]
            piorJog = i + 1
        }
    }
    return [qtQuebraRecord, piorJog]
}

console.log(avaliacao(pontuacao))

