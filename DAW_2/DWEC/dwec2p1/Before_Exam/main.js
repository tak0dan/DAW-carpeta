"strict mode"

function myRunningTotal(arr){
  let array = [];
  let pos = 0;
  for(let i = 0; i<arr.length; i++){
    if(Number.isInteger(arr[1])){
          pos += arr[i];
          array[i] = pos;
    }else{
      return "Valores no validos";
    }

  }
  return array;
}

console.log(myRunningTotal([1, 2, 3, 4, 5])); // [ 1, 3, 6, 10, 15]


//myNoRepeatsInARow(arr)
//myNoRepeatsInARow(arr) 
//devuelve un array nuevo igual que arr, 
//pero quitando los elementos que son 
//estrictamente iguales al que tienen justo antes. 
//Si un valor se repite más adelante, 
//pero no seguido, se queda. arr no cambia. 
//Sin métodos de array.

//console.log(myNoRepeatsInARow([1, 1, 2, 2, 2, 1, 3, 3]));


function myNoRepeatsInARow(arr) {
  let array = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      array[array.length] = arr[i];
    }
  }

  return array;
}
console.log(myNoRepeatsInARow([1, 1, 1, 3, 5, 4, "a","a","a",5,"a", 5, 5]));
console.log(myNoRepeatsInARow([1, 1, 2, 2, 2, 1, 3, 3])); // [ 1, 2, 1, 3 ]


