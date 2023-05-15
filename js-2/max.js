function max(arreglo){
    let maximo = arreglo.length
    for (let i = 0; i < arreglo.length; i++){
        if (arreglo[i] >  maximo)
        maximo = arreglo [i]
        return maximo
        
    }
    

}// escribe la función max acá

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined