// uma das vantgesn de programação é a 
// automação de tarefas que nao gostamos de realizar.
// dito isSecureContext, elabore uma função cujo objetivo é 
// resolver a formula de baskara. Para isSecureContext, sua função deve 
// receber tres parametros, ax2, bx, c, de tal modo que na euação, os valores seriam 
// respectivmente: 3, -5, 12. Como rerno deve ser passado um vetor que tem 2 valores 
// um para cada possivel resultado, mesmo que os resultados sejam iguais. caso o delta 
// sja negatino, retorne ao inves do vetor, uma tring com a frase: "delta é negativo"

function bhaskara (a,b,c){
    let resultado = []
    let  delta = [b**2 -(4*a*c)]
    if (delta >0 ){
        return "Delta é negativo"
    }
let x1 = (-b + Math.sqrt(delta))/ 2*a
let x2 = (-b - Math.sqrt(delta))/ 2*a

resultado.push(x1)
resultado.push(x2)
return resultado
}

console.log(bhaskara(1, -10, 24))
