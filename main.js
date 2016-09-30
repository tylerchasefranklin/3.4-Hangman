(function(){
  "use strict";

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

var showGuesses = document.getElementById('guesses');
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// not finished: this is designed to use the keyboard itself as the input for the letters
document.addEventListener('keydown', function(event){
  console.log('You pressed:', String.fromCharCode(event.keyCode));
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
