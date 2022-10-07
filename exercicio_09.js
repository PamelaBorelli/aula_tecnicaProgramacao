// Construa uma função para um sistema de notas de uma instuicao que possui a 
// seguinte politica de classificação: todo aluno recebe uma nota de 0 a 100.
// Alunos com notas abaixo de 40 serao reprovados. As notas possuem as seguintes 
// regras de arredondamento: Se a diferença entre a nota e o proximo multiplo de
// 5 for menor que 3, arredondar a nota para esse proximo multiplo de 5. Se a nota
// for abaixo de 38, não é feito nenhum arredondamento pos esta nota resulta na 
// reprovação do aluno. Por exemplo, a nota 84 será arredondada para 85, mas anota 29
// não sera arredondda por ser abaixo de 40 e nao ser possilvel arredondamento ediciente, 
// ou seja, que evite a reprovação do aluno. no caso de a nota ser 38, o arredondamento
// é possivel pois atingiria 40 e o aluno será aprovado 


function avaliacao (nota){
    let aprovado = nota[0]
    let reprovado = nota[0]

    for (let i = 1; i < nota.length; i++){
        if (nota > (38 % 5))>2 {
        aprovado = nota
        }else if{
            if (nota < 38){

            }
        }
}

}

function