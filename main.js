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








}());
