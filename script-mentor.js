$(document).ready(function(){

  var secretnumber = parseInt(Math.random()*100);
  console.log(secretnumber);

  var $ul =$('#guessList'); 

  $('.js-guess-button').click(function(event) {
    event.preventDefault();
    var guessedNumber = $('.js-user-guess-number').val();
    var message = compareNumbers(guessedNumber, secretnumber); 
    $ul.append('<ul></ul>')
  });

  function compareNumbers(guessedNumber, secretNumber) {
    var message = '';

    if(guessedNumber == secretNumber) {
      $ul.append('<li>You Nailed IT !!</li>');
    }

    else if(guessedNumber > secretNumber) {
        
        if(guessedNumber - secretNumber <= 10){
            $ul.append('<li>so hot right now</li>');
        }
        else if (guessedNumber - secretNumber < 15){
            $ul.append('<ul>very warm</ul>');
        }
        else if (guessedNumber - secretNumber < 20){
            $ul.append('<li>pretty cool now</li>');
        }
        else if (guessedNumber - secretNumber < 30) {
          $ul.append('<li>even colder now</li>');
        }
        else if (guessedNumber - secretNumber < 40){
            $ul.append('<ul>straight cold now</ul>');
        }
        else if (guessedNumber - secretNumber < 50){
            $ul.append('<ul>brrrrrrr</ul>');
        }
    }

    else {
        if(secretNumber - guessedNumber <= 10){
           $ul.append('<li>so hot right now</li>');
        }
        else if (guessedNumber - secretNumber > 15){
            $ul.append('<ul>very warm</ul>');
        }
        else if (secretNumber - guessedNumber > 20){
            $ul.append('<li>pretty cold now</li>');
        }
        else if (guessedNumber - secretNumber > 30){
            $ul.append('<ul>even colder now</ul>');
        }
        else if (guessedNumber - secretNumber > 40){
            $ul.append('<ul>straight cold now</ul>');
        }
        else if (guessedNumber - secretNumber > 50){
            $ul.append('<ul>brrrrrrr</ul>');
        }
      }  
  };

  // new game code// 

$('.new').click(function newGame(){
    console.log("it works");
    $('.userGuess').val('');
    $('.guessList li').remove();
});
    
  // guess count feature //
  
  var guessCount = 0;

  function setCount(count){
        $('#count').text(guessCount);
    }


});