//--------------punto 1
let receta = {
}

//------------punto 2
receta.nombre = "sandwich"

//----------------punto 3

receta.ingredientes = []

//--------------- punto 4
receta.ingredientes.push({
    nombre:  "pan",
    cantidad:  2
});

// ------------------punto 5

receta.ingredientes.push({
    nombre: "queso",
    cantidad: 1
});
//-------- punto 6 y 7
let total = 0;
for(let i; i < receta.ingredientes.length; i++){
    total += receta.ingredientes.length[i].cantidad 
}
console.log(total);

