//---------------punto 1
let persona = {
    nombre: "david",
    edad: 30,
    ciudad: "cucuta",
    profesion: "ingeniero",
    
      }
    
  //--------------- punto 2

console.log(persona) 
//------------------ punto 3
function presentacion(obj) {
  console.log(obj.nombre);// la función retorna undefined
}
//---------------- punto 3
function presentacion(persona) {
  return `nombre ${persona.nombre}, edad ${persona.edad}  vivo en ${persona.ciudad}.`;
}

//------------------------punto 4
let mensaje = presentacion(persona);
presentacion(persona);

//--------------punto 5
console.log(mensaje);

//----------------- punto 6

persona.hobbies = ["entrenar","entrenar","programa"];

//-------------- punto 7

console.log(persona.hobbies);

//--------------punto 8

for(let i = 0; i< persona.hobbies.length; i++){
  console.log(persona.hobbies[i]);

}
