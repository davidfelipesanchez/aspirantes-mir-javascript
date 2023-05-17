//----------------------piunto 1
let pedro = { 
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
    saluda: function() {
      console.log("Hola, me llamo " + this.nombre);
    } //-------------------- punto 6
    
} 
//----------------------------------------------------

pedro.saluda()// ----------------punto 7

console.log(pedro.edad); //--------------punto 2

pedro.estatura = 1.8  //--------------punto 3

delete pedro.activo; // ---------------punto 4

//----------------------------------------------------

for (let llave in pedro) {
    if (pedro.hasOwnProperty(llave)) {
      console.log( llave+":" +pedro[llave])
    }
  } //------------------------------ punto 5
  
  