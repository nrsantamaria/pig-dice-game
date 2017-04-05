//business logic
function Player(tempScore) {
  this.totalScore = 0;
  this.tempScore = tempScore;
};

//Returns an integer beteween 1 and 6
function roll(){
  return Math.floor(Math.random()*6+1);
};

// Evaluates if number is equal to one, return temp = 0.  Else, add number to temp.
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
    console.log("temporary= " + temporary);

    var playerOne = new Player (temporary);

    $("#player-one-score").text("Total score is = " + playerOne.totalScore + " and Temp score is = " + playerOne.tempScore);

  });//form submit close


});//document ready close
