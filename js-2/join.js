function join(arreglo){
    let resultado = ""
    for (let i = 0; i < arreglo.length; i ++){
        resultado += arreglo[i]
        if(i !== arreglo.length-1){
            resultado += " "
        }

    }
    return resultado
}
console.log(join(["chocolate" , "torta" , "quesilo" , "cupcake"]))
console.log(join(["bus" , "moto" , "carro" , "scooter"]))
console.log(join(["ventilador" , "mesa" , "cama"]))