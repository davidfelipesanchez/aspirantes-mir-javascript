function max(arreglo){
    let maximo = arreglo[0] // se asigna a la variable maximo el valor del primer elemento del arreglo
    for (let i = 0; i < arreglo.length; i++){
        if (arreglo[i] >  maximo ){
        maximo = arreglo [i]
        }
        
        else if(arreglo.length == 0){ // si el arreglo esta vacio retornar undefined
        return undefined
        }
    }
    return maximo // retornamos despues de revisar todos los elementos ya que en el ejercicio pasado no tuve en cuenta que si el arreglo esta vacio retornara un undefined
}
    console.log(max([1, 3, 2])) // 3
    console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
    console.log(max([])) // undefined