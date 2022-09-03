function tratarErroeLancar(erro){
    throw new Error("Ops!!! Ocorreu um erro!")
}

function imprimirNomeMaiusculo(obj){
    try{
        console.log(obj.nome.toUpperCase() + "!!!")
    }catch(e){
        tratarErroeLancar(e)
    }
}
const obj = {nome: "Pamela"}

imprimirNomeMaiusculo(obj)