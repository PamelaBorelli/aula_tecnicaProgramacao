// const notas = [6.7, 5.5, 8.2, 9.2, 10]

// for(let i in notas){
//     console.log(i, notas[i])
// }

const pessoa = {
    nome: "Pamela",
    sobrenome: "Borelli",
    idade: "35",
    peso: "65"
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
