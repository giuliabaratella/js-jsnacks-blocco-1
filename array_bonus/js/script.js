// 3.  (Bonus)
// Cartella: array_bonus
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// fare una comparazione tra l'indice delle due liste

let arrayA = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayB = [1, 2, 3]

console.log (arrayA, arrayB);

// calcolo la lunghezza dei due array 
let nIndexA = 0 ;
for (let i = 0; i < arrayA.length ; i++){
    nIndexA ++;
}
console.log (nIndexA);

let nIndexB = 0 ;
for (let i = 0; i < arrayB.length ; i++){
    nIndexB ++;
}
console.log (nIndexB);

// controllare se il primo array è > o < del secondo 
// ciclo: finchè la lunghezza dell'arrayA è > della lunghezza di arrayB, si aggiunge un elemento ad arrayB
if (nIndexA > nIndexB){
    for (i = 0; i < (nIndexA - nIndexB); i++ ){
        arrayB.push (nIndexB + i + 1);
    }
    
} else if (nIndexB > nIndexA) {
    for (i = 0; i < (nIndexB- nIndexA); i++ ){
        arrayA.push (nIndexA + i + 1);
    }
}
console.log (arrayA, arrayB);




