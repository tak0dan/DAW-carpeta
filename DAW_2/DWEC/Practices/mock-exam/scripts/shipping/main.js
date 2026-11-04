'use strict';

function notValid(entry) {
  entry = Number(entry);
  if (Number.isNaN(entry) || entry <= 0) 
  {
    return null;
  }else{
    return entry;
  }
}

function shippingCost(weightKg, isMember = false) {
    let cost;
    weightKg = notValid(weightKg);

    if (weightKg === null) {
        return null;
    } else if (weightKg <= 1) {
        cost = 3;
    } else if (weightKg <= 5) {
        cost = 6;
    } else if (weightKg <= 20) {
        cost = 12;
    } else {
        cost = 25;
    }

    if (isMember) {
        cost /= 2;
    }

    return cost;
}

function describeWeight(kg){
  return kg <2 ? 'light' 
          : kg <10? 'medium'
            : 'heavy';  
}

function dayType(day) {
  switch (day) {
    case "sun"/"sat":
      return "weekend";
      break;
    case "fri" :
      return "almost weekend";
      break;
  
    default:
      break;
  }

  // I prefer switch over groups of numbers or when there are 
  //  groups of conditions to evaluate
  
}

let answer = "";
let i = 1;
function fizzBuzz(number){
  let stringFB = "";
  if(i%3===0){
    stringFB+="Fizz";
  }
  if(i%5===0){
    stringFB+="Buzz";
  }
  return stringFB || number;
}
for(; i<=15;){
  answer += "'";
  answer += fizzBuzz(i);
  answer += "'";
  i++;
}
console.log(answer);
i = 1;
answer = "";
do{
  answer += "'";
  answer += fizzBuzz(i);
  answer += "'";
  i++;
}while(i <=15);
console.log(answer);
i=1;
answer = "";
while (i<=15) {
  answer += "'";
  answer += fizzBuzz(i);
  answer += "'";
  i++;
}
console.log(answer);

// shippingCost("nigga",2);