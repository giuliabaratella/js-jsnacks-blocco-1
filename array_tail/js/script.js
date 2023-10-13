// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali da 1 a 100 per quanti sono gli elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'Array
// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare

// input + bottone nell'html per inviare il numero inserito dall'utente
// controllare che il valore inserito sia un numero 
// ciclo fino al valore che l'utente ha inserito 
// dentro al ciclo array vuota in cui ad ogni giro del ciclo si aggiunge un numero casuale

// utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const btn = document.getElementById('button');


btn.addEventListener('click', function(){
    const valoreUtente = parseInt(document.getElementById('data').value) ;
    // console.log (valoreUtente);
    let array = []; 
    for (let i = 0; i < valoreUtente; i++) {
        array.push (getRndInteger(1,101));
    }
    console.log (array);
})
