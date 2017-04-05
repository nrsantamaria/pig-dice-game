//business logic
function Player(tempScore,totalScore) {
  this.tempScore = tempScore;
  this.totalScore = totalScore;
};

//Returns an integer beteween 1 and 6
function roll(){
  return Math.floor(Math.random()*6+1);
};

// Evaluates if number is equal to one, return value = 0.  Else, add number to value and return value.
function updateValue (number) {
  var value = 0;
  if (number === 1){
    value = 0;
  } else {
    value += number;
  }
  return value;
};

//user interface logic
$(document).ready(function(){
  $("#pig-game").submit(function(event){
    event.preventDefault();

    var rollValue = roll();
    $("#roll-value").text(rollValue); //Display roll value

    var temporary = updateValue(rollValue);

    var playerOne = new Player (temporary,0);

    $("#player-one-score").text("Total score is = " + playerOne.totalScore + " and Temp score is = " + playerOne.tempScore);

    $("#hold").click(function(){
      playerOne.totalScore += temporary;
      playerOne.tempScore = 0;
      $("#player-one-score").text("Total score is = " + playerOne.totalScore + " and Temp score is = " + playerOne.tempScore);
    });

  });//form submit close

});//document ready close
