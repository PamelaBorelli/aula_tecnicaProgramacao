// elabore duas funcoes que receba tres parametros (capital inicial, 
// taxa de juros, tempo de aplicação). A  primeira função retornará 
// o montante da aplicação financeira sob o regime de juros simples e a segunda 
// retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capital, taxa, tempo){
    return capital + (capital* (taxa/100) * tempo) 
}


function JurosComposto(capital, taxa, tempo){
    return capital *(1 + (taxa/100)) ** tempo
}

console.log("Juro Simples: ", jurosSimples(100,10,2))
console.log("Juros Compostos: ", JurosComposto(100,10,2).toFixed(2))