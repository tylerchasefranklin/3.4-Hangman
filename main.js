(function(){
  "use strict";

var alphabet ;
var guess ;
var totalGuesses ;
var guessesLeft ;
var lettersGuessed ;
var lettersMatched ;
var output ;
var letters ;
var messages ;
var numLettersMatched;
var currentWord ;
var guessInput ;

function setupGame() {
  alphabet = "abcdefghijklmnopqrstuvwxyz";
  totalGuesses = 8;
  messages = {
    win: 'You Win!',
    lose: 'Game Over',
    guessed: 'Game Over',
    validLetter: 'Please use a character from A-Z'
    };
    lettersGuessed = lettersMatched = '';
    numLettersMatched = 0;
    currentWord = spanCreator;
    guessesLeft = document.getElementById('guesses-left');
    guessInput = document.addEventListener('keydown', function(event){
      console.log('You pressed:', String.fromCharCode(event.keyCode));
    });
    guessesLeft.innerHTML = 'You have ' + totalGuesses + ' guesses left';
  }

function endGame (win) {
  if (win) {
    output.innerHTML = messages.win;
    output.classList.add('win');
  } else {
    ouput.innerHTML = messages.lose;
    output.classList.add('error');
  }
}

document.getElementById("start").onclick = setupGame();

var wordNarrow = commonWords.filter(function(word){
  return word.length > 2;
});

function generateRandomWord(array){
  var randomWord = array[Math.floor(Math.random() * wordNarrow.length)];
  return randomWord;
}

var splitWord = function(){
  var randomWord = generateRandomWord(wordNarrow);
  var randomWordArray = randomWord.split("");
  return randomWordArray;
};

var spanCreator = splitWord();
console.log(spanCreator);

spanCreator.forEach(function(letter){
var newSpan = document.createElement('span');
//newSpan.textContent = letter;
newSpan.className = letter + 'word';
var guessWord = document.getElementById('word-container');
guessWord.appendChild(newSpan);
});





// not finished: for creating buttons
//var buttons = forEach(function(letter){
  //var letterButtons = document.createElement('ul');
  //letters.className = letter;
  //var letterBox = document.getElementById('buttons');
  //var letters = document.createElement('li');
  // letters.textContent =

//});










}());
