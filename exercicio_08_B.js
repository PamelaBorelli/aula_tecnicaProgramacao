let stPontuacao = ("10 20 20 8 25 3 0 30")

function avaliaPontuacao (stPontuacao){
    let pontuacoes = stPontuacao.split(" ") 
    let qtQuebraRecord = 0
    let piorJog = 1
    let maiorPonto = pontuacoes[0]
    let menorPonto = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++){
        let pontuacao = parseInt(pontuacoes[i])
        if (pontuacao > maiorPonto){ 
            maiorPonto = pontuacao
            qtQuebraRecord ++

        }else if (pontuacao < menorPonto){
           menorPonto = pontuacao
           piorJog = i + 1
        }
    }
    return[qtQuebraRecord, piorJog]
}

console.log(avaliaPontuacao(stPontuacao))

