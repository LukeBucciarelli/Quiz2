var questions = [
  {
    question: "Who was the first person to climb 5.15?",
    choices: ["Royal Robbins","Chris Sharma","Tommy Caldwell","Fred Nicole" ],
    answer: 1
  },
  {
    question: "Name the only 5.15b in North America.",
    choices: ["Jumbo Love","Chris Sharma","Toxic Turkey","God’s Own Stone" ],
    answer: 0
  }
];
var choicePrefixes = ["A: ","B: ", "C: ", "D: "];
var currentQuestion = 0;


$(document).ready(function () {

  // get current html elements for later use in click handlers
  var $choicesListElement = $('.choices-list');
  var $questionElement = $('.question');
  var $submitAnswerButton = $('.submit-answer-js');

  // play button click handler
  $('.play-button-js').click(function () {
    $questionElement.text(questions[currentQuestion].question);

    var choicesFirstQuestion = questions[currentQuestion].choices;
    for(var i = 0; i < choicesFirstQuestion.length; i++) {
      var $listItem = $('<li class="choices-list__item">' + choicePrefixes[i] + choicesFirstQuestion[i] + '</li>');
      $listItem.click(function() {
        $('.choices-list').children().removeClass("active");
        $(this).addClass('active');
      });
      $choicesListElement.append($listItem);
    }
  });

  // submit answer button click handler
  $submitAnswerButton.click(function() {
    $choicesListElement.children().each(function(index) {
      console.log(index);
    });
  });

});
