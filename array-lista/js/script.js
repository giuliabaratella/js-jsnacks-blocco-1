// Descrizione:
// Abbiamo un frigorifero pieno di frutta:
// 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
// C'è anche una pesca sul tavolo, la mettiamo nel frigo.
// Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
// Fasi
// 1. creare l'array con la frutta del frigorifero
// 2. aggiungere la pesca all'array della frutta
// 3. verificare se nell'array di frutta c'è il cocomero:
//    - se c'è stampiamo: 
//    - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"

const frigo = [
    'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'
]
console.log (frigo);

frigo.push ('pesca');
console.log (frigo);

let presente = false;
for (let i = 0; i < frigo.length; i++){
    
    if(frigo [i] === 'cocomero') {
        presente = true;
    }
}

if (presente) {
    console.log ("Trovato! Devo solo preparare il cocktail.")
} else {
    console.log ("Oh no, devo uscire a comprare il cocomero!")
}
