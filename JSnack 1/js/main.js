// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.

// richiesta per l'utente
let number = prompt("digita un numero");

// condizione per numeri pari
if (number % 2 === 0) {
    console.log(number);

// condizione per numeri dispari   
} else {
    console.log(parseInt(number) + 1);
}