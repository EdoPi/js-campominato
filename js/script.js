/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati (tadaaa!)
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/


function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

function isValid(inputNumber){
  if (isNaN(inputNumber)) {
      return false;
  }
  if (inputNumber > 100) {
      return false
  }
  if (inputNumber < 1) {
      return false
  }

  return true
}


function winning (sceltaUtente, listaBombe){
  if (listaBombe.includes(sceltaUtente)) {
    return false
  }
  return true
}



var bombs = [];


while(bombs.length < 16) {
  var bomba = randomNumber(1, 100);
  if (bombs.includes(bomba) === false) {
    bombs.push(bomba);
  }
}

console.log(bombs);

var listUserNumbers = [];

while (winning (userNumber, bombs) && listUserNumbers.length < (100 - 16)) {
  var userNumber = parseInt(prompt('scegli un numero tra 1 e 100'));
  if (isValid(userNumber)) {
    if (listUserNumbers.includes(userNumber) === true) {
      alert('hai già inserito questo numero');
    } else {
      if (winning(userNumber, bombs) === false) {
        alert ('hai perso');
      }
      listUserNumbers.push(userNumber);
      if (listUserNumbers.length === 100 - 16) {
        alert ('hai vinto!');
      }
    }
  } else {
    alert ('input non valido, inserisci un numero compreso tra 1 e 100');
  }

}


alert ('il tuo punteggio è ' + listUserNumbers.length);
