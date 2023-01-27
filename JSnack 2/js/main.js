// Creare 2 div con due id diversi. Un div avrà il testo colorato di rosso
// mentre l’altro di verde. Partendo da un array di numeri, stampiamo 
// nell’id rosso i numeri dispari e in verde i numeri pari.

// Array con i numeri
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// collegamento agli Id
let redNum = document.getElementById("red");
let greenNum = document.getElementById("green");

// ciclo per i numeri 
for (let i = 0; i < numbers.length; i++) {

    // if per numeri pari
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + " red");
        greenNum.innerHTML += numbers[i] + "<br>";
        //document.getElementById("red-num").innerHTML = numbers[i] + "<br>";

    // else per numeri dispari  
    } else {
        console.log(numbers[i] + " green");
        redNum.innerHTML += numbers[i] + "<br>";
        //document.getElementById("red-num").innerHTML = numbers[i] + "<br>";   
    }   
}