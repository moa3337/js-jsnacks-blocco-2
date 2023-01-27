// Crea un array di numeri interi e fai la somma
// di tutti gli elementi  che sono in posizione dispari

// Array con i numeri
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Variabile della somma dei dispari
let sum = 0;

// Ciclo 
for (let i = 0; i < numbers.length; i++) {
    // Se i numeri sono pari stapa
    if (i % 2 === 0) {
        sum += numbers[i];
    }
}

// Csonsole.log("Somma Dei Numeri Dispari: " + sum);
console.log("La somma dei numeri dispari è: " + sum);

// Recupero dei tag "p" dal HTML
document.getElementById("sum").innerHTML = "Somma Dei Numeri Dispari: " + sum;