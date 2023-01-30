const numbersA = [1, 4, 7, 9, 10, 13, 15];

const numbersB = [2, 6, 11, 14];

let moreElements;
let lessElements;

if (numbersA.length > numbersB.length) {
    moreElements = numbersA;
    lessElements = numbersB;
} else {
    moreElements = numbersB;
    lessElements = numbersA;
}

const differenceBetween = moreElements.length - lessElements.length;

for (let i = 0; i < differenceBetween; i++) {
    lessElements.push(Math.floor(Math.random * 100) + 1)
}

console.log("lunghezza moreElements: " + moreElements.length);
console.log("moreElements: " + moreElements);

console.log("lunghezza lessElements: " + lessElements.length);
console.log("lessElements: " + lessElements.length);