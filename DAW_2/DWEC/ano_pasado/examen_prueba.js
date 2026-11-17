"use strict";
let separador;

function validateNumber(num) {
    if (Number.isInteger(num) && !Number.isNaN(num) && (num%1===0)) {
        return num;
    } else {
        return NaN;
    }
}


function miFuncion(a, b) {
  let respuesta = "";  
    a = validateNumber(a);
    b = validateNumber(b);
    separador = " | ";
    if (!(Number.isNaN(a) || Number.isNaN(b) && a<b)) {
      for(let i = a; i <= b; i++){
        if(i % a===0){
          respuesta += i + separador;
        }
        
      }
    }

    return respuesta;
}

console.log("miFuncion(3, 40)"+miFuncion(3, 40));
console.log("miFuncion('a', 40)"+miFuncion("a", 40));
console.log("miFuncion(3, Infinity)"+miFuncion(3, Infinity));

