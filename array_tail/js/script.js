// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali da 1 a 100 per quanti sono gli elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'Array
// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare

// input + bottone nell'html per inviare il numero inserito dall'utente
// controllare che il valore inserito sia un numero 
// ciclo fino al valore che l'utente ha inserito 
// dentro al ciclo array vuota in cui ad ogni giro del ciclo si aggiunge un numero casuale
// creo un nuovo array che contenga solo gli ultimi 5 elementi dell'array principale
// bonus:
// creo una nuova lista e un nuovo ciclo che ci inserisca n valori 
// dove n = valore input seconda casella 
// per ogni giro del ciclo aggiugo un valore che  è uguale ad uno dei valori della prima lista, e il cui indice è (lunghezza della lista - n)
// la variabile dovrà quindi contare a partire da n in maniera decrescente fino ad arrivare a (length-1)


// utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const btn = document.getElementById('button');
const list = document.getElementById('list');

btn.addEventListener('click', function(){
    const valoreUtente = parseInt(document.getElementById('data').value) ;
    // console.log (valoreUtente);
    let array = []; 
    for (let i = 0; i < valoreUtente; i++) {
        array.push (getRndInteger(1,101));
    }
    console.log (array);

    let printArray5 = [];
    if (array.length <= 5){
        printArray5 = array;
    } else {
        for (i = 5; i >= 1; i--){
            printArray5.push (array[array.length - i]);
        }
        
        // printArray5 = [(array[array.length - 5]), (array[array.length - 4]), (array[array.length - 3]), (array[array.length - 2]), (array[array.length - 1])];
    }

    console.log (printArray5);

    const toStamp = parseInt(document.getElementById('data2').value) ;
    const printArrayUser = []

    for (let i = toStamp ; i >= 1; i--) {
        printArrayUser.push (array[array.length - i]);
    }

    if (printArrayUser.length > array.length){
        console.log ('Errore, inserisci più elementi nella lista!')
        list.innerHTML = 'Errore, inserisci più elementi nella lista!'
    } else {
        console.log (printArrayUser);
        list.innerHTML = printArrayUser
    }
   



    // list.innerHTML = printArrayUser;


})
