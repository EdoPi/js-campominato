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

//FUNZIONI

// FUNZIONE PER CREARE NUMERI RANDOM
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

//FUNZIONE PER VERIFICARE CHE L'INPUT IMMESSO RISPECCHI DELLE CARATTERISTICHE
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

// FUNZIONE PER VERIFICARE CHE OGGETTO NON SIA GIà INCLUSO IN UN ARRAY
function isNotIncluded (firstInput, secondInput){
  if (secondInput.includes(firstInput)) {
    return false
  }
  return true
}


//FUNZIONE PER ESEGUIRE IL GIOCO
function gameStart(minBlocks, maxBlocks, totalBombs){

// PRIMA CREO ARRAY CONTENENTE I NUMERI BOMBA E MI ASSICURO CHE SIANO UNIVOCI
while(bombsInField.length < totalBombs) {
  newBomb = randomNumber(minBlocks, maxBlocks);
  if (isNotIncluded(newBomb, bombsInField)) {
    bombsInField.push(newBomb);
  }
}
console.log(bombsInField);

//SI AVVIA IL GIOCO
//IL WHILE SI ARRESTA SOLO SE L'UTENTE INSERISCE UN NUMERO CHE è TRA QUELLI SCELTI DAL COMPUTER ( QUINDI HA PERSO)
//E SE NON HA RAGGIUNTO IL NUMERO MASSIMO DI TENTATIVI POSSIBILI SENZA TROVARE LA BOMBA ( QUINDI HA VINTO)
while (isNotIncluded(userNumber, bombsInField) && listUserNumbers.length < (maxBlocks - totalBombs)) {
  var userNumber = parseInt(prompt('scegli un numero tra ' + minBlocks + ' e ' + maxBlocks));
  if (isValid(userNumber)) {
    if (isNotIncluded(userNumber, listUserNumbers) === false) {
      alert('hai già inserito questo numero');
    } else {
      if (isNotIncluded(userNumber, bombsInField) === false) {
        alert ('hai perso');
      }
      listUserNumbers.push(userNumber);
      if (listUserNumbers.length === maxBlocks - totalBombs) {
        alert ('hai vinto!');
      }
    }
  } else {
    alert ('input non valido, inserisci un numero compreso tra ' + minBlocks + ' e ' + maxBlocks);
  }
}
alert ('il tuo punteggio è ' + listUserNumbers.length);
}


//VARIABILI GENERALI
var bombsInField = [];
var listUserNumbers = [];
var newBomb;


//IL GIOCO!!!!!!!
switch (prompt('scegli il livello tra 0, 1 o 2')) {
  case '0':
    gameStart(1, 100, 16);
    break;
  case '1':
    gameStart(1, 80, 16);
    break;
  case '2':
    gameStart(1, 50, 4);
    break;
  default:
  alert ('devi scrivere o 0 o 1 o 2, a seconda del livello su cui vuoi giocare')
}
