const price = 19.99;
const units = 3;
const vatRate = 0.21;


let total;
total = (price * units * (1 + vatRate));

let totalText = total.toFixed(2);

let totalNumber;

if(typeof(totalText) == "string"){
    totalNumber = totalText.toInteger;
}

let isEvenCents;
if(total%2 === 0){
    isEvenCents = true;
}else{
    isEvenCents = false;
}

// DISCLAIMER: (What does that part of task even means?)