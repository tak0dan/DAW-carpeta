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
let sum1 = 0;
let sum2 = 0;

function myNoRepeatsInARow1(arr) {
  let array = [];
  let a;

  for (let i = 0; i < arr.length; i++) {
    sum1++;

    for (a = 0; a < array.length; a++) {
      sum1++;

      if (arr[i] !== array[a]) {
        continue;
      } else {
        break;
      }
    }

    if (a === array.length) {
      array[array.length] = arr[i];
    }
  }

  return array;
}

function myNoRepeatsInARow2(arr) {
  let array = [];

  for (let i = 0; i < arr.length; i++) {
    sum2++;

    if (arr[i] !== arr[i - 1]) {
      array[array.length] = arr[i];
    }
  }

  return array;
}

let input = [1, 1, 1, 3, 5, 4, "a", "a", "a", 5, "a", 5, 5];

console.log("Function 1 result:", myNoRepeatsInARow1(input));
console.log("Function 2 result:", myNoRepeatsInARow2(input));

console.log("------------------------------");
console.log("Function 1 iterations:", sum1);
console.log("Function 2 iterations:", sum2);
console.log("Difference:", sum1 - sum2);



function myEveryNth(arr, n){
  array = [];
  cont = 0;
  if(Number.isInteger(n) && n>0){
    for(let i = 0; i<arr.length; i += n){
      array[cont] = arr[i];
      cont += 1;
    }
  }else{
    return null;
  }
  
  return array;
}

console.log(myEveryNth([10, 20, 30, 40, 50], 2)); // [ 10, 30, 50 ]



function ej2(num2, num1=2){
  let separator = " | ";
  let stringOut = "";
  if(num2>num1 && num1>0 && Number.isInteger(num1) && Number.isInteger(num2)){
    for(let i = num1; i<num2 ; i += num1){
      stringOut = stringOut + i + separator;
    }
  }
  return stringOut;
}

console.log(ej2(3, 10));

func = ej2;

console.log(func(3,10));

const TESTS1 = [
  [1,  3,    10,   "3 | 6 | 9 | "],      // normal case
  [2,  2,    10,   "2 | 4 | 6 | 8 | "],  // exact divisor of the limit
  [3,  1,    4,    "1 | 2 | 3 | "],      // step of 1
  [4,  4,    5,    "4 | "],              // only one multiple fits
  [5,  5,    5,    ""],                  // num1 == num2
  [6,  7,    3,    ""],                  // num1 > num2
  [7,  0,    5,    ""],                  // zero step (would loop forever)
  [8,  -2,   5,    ""],                  // negative num1
  [9,  2.5,  10,   ""],                  // non-integer num1
  [10, 3,    10.5, ""],                  // non-integer num2
  [11, "3",  10,   ""],                  // string instead of number
];

function runTests(arr) {
  let ok = 0;
  let ko = 0;
  let failures = [];

  for (let i = 0; i < arr.length; i++) {
    let t = arr[i];
    let n = t[0];
    let expected = t[3];
    let out;

    try {
      out = func(t[1], t[2]);
    } catch (e) {
      out = "EXC " + e.name;   // a crash counts as a failure
    }

    if (out === expected) {
      ok++;
    } else {
      failures[ko] = n + ":" + expected + ":" + out + ":";
      ko++;
    }
  }

  console.log("OK/KO: " + ok + "/" + ko);
  for (let i = 0; i < failures.length; i++) {
    console.log(failures[i]);
  }
}

console.log("First test (before the inversion)");
runTests(TESTS1);



function ej2_2(num1, num2){
  let separator = " | ";
  let stringOut = "";
  if(num2>num1 && num1>0 && Number.isInteger(num1) && Number.isInteger(num2)){
    for(let i = num1; i<num2 ; i += num1){
      stringOut = stringOut + i + separator;
    }
  }
  return stringOut;
}

const TESTS2 = [
  [1,  10,    3,   "3 | 6 | 9 | "],      // normal case
  [2,  10,    2,   "2 | 4 | 6 | 8 | "],  // exact divisor of the limit
  [3,  4,    1,    "1 | 2 | 3 | "],      // step of 1
  [4,  5,    4,    "4 | "],              // only one multiple fits
  [5,  5,    5,    ""],                  // num1 == num2
];

function runTests_2(arr) {
  let ok = 0;
  let ko = 0;
  let failures = [];

  for (let i = 0; i < arr.length; i++) {
    let t = arr[i];
    let n = t[0];
    let expected = t[3];
    let out;

    try {
      out = ej2_2(t[1], t[2]);
    } catch (e) {
      out = "EXC " + e.name;   // a crash counts as a failure
    }

    if (out === expected) {
      ok++;
    } else {
      failures[ko] = n + ":" + expected + ":" + out + ":";
      ko++;
    }
  }

  console.log("OK/KO: " + ok + "/" + ko);
  for (let i = 0; i < failures.length; i++) {
    console.log(failures[i]);
  }
}
console.log("Second test (after the inversion)");
runTests_2(TESTS2);


function ej2_3(num2, num1=2, bool=false){
  let separator = ", ";
  let stringOut = "";
  if(num2>num1 && num1>0 && Number.isInteger(num1) && Number.isInteger(num2)){
    for(let i = num1; i<num2 ; i += num1){
      if(bool===true){
        if(stringOut===""){
          stringOut = i;
        }else if(i===num1*2){
          stringOut = i + " y " + stringOut;
        }else{
          stringOut = i + separator + stringOut;
        }
      }else{
        if(stringOut===""){
          stringOut = i;
        }else if(i+num1>=num2){
          
          stringOut = stringOut + " y " + i;
        
        }else{
          stringOut = stringOut + separator + i;
        }
      }
    }
  }

  return stringOut;
}

console.log(ej2_3(20,3,true));
console.log(ej2_3(20,3));