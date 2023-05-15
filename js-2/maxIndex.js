function maxIndex(arreglo){
    let maximo = arreglo.length
    for (let i = 0; i < arreglo.length; i++){
        if (arreglo[i] >  maximo)
        maximo = arreglo.indexOf(maxIndex)
        
        
        return maximo
        
        
    }
    

}// escribe la función max acá

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1