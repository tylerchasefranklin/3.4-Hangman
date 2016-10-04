(function(){
  "use strict";

var alphabet ;
var totalGuesses ;
var guessesLeft ;
var lettersGuessed ;
var lettersMatched ;
var letters ;
var messages ;
var numLettersMatched;
var currentWord ;
var guessInput ;
var spanCreator ;

function setupGame() {
  console.log('ay yo');
  $('.word-container').html('');
  alphabet = "abcdefghijklmnopqrstuvwxyz";
  totalGuesses = 8;
  messages = {
    win: 'You Win!',
    lose: 'Game Over!',
    validLetter: 'Please use a character from A-Z'
    };
    currentWord = spanCreator;
    guessesLeft = document.getElementById('guesses-left');
    guessInput = document.addEventListener('keydown', function(event){
      console.log('You pressed:', String.fromCharCode(event.keyCode));
      guess(String.fromCharCode(event.keyCode).toLowerCase());
    });
    guessesLeft.innerHTML = 'You have ' + totalGuesses + ' guesses left';
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

    spanCreator = splitWord();
    console.log(spanCreator);

    spanCreator.forEach(function(letter){
    var newSpan = document.createElement('span');
    newSpan.textContent = letter;
    newSpan.className = letter + 'word';
    var guessWord = document.getElementById('word-container');
    guessWord.appendChild(newSpan);
    });
  }

function guess(letter){
  var thisGuess = false;
  var checkWin = true;
  for(var i = 0; i < spanCreator.length; i++){
    if(spanCreator[i] === letter){
      thisGuess = true;
      $($('.word-container span')[i]).addClass('active');
    }
  }
  if (!thisGuess) {
    totalGuesses--;
    guessesLeft.innerHTML = 'You have ' + totalGuesses + ' guesses left';
  } if (totalGuesses < 1){
    endGame(false);
  } for(var j = 0; j < spanCreator.length; j++){
    if (!$($('.word-container span')[j]).hasClass('active')){
      checkWin = false;
    }
  } if (checkWin){
    endGame(true);
  }
}

function endGame (win) {
  if (win) {
    $('.endmessage').html(messages.win);
  } else {
    $('.endmessage').html(messages.lose);
  }
}

setupGame();
$('.reset').on('click', function(){
  setupGame();
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
