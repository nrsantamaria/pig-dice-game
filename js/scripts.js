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
  var playerOne = new Player (0,0);
  var playerTwo = new Player (0,0);
  $("#player-one-score").text("Total score is = " + playerOne.totalScore);

  //Roll die submit function
  $("#pig-game").submit(function(event){
    event.preventDefault();

    var rollValue = roll();
    $("#roll-value").text(rollValue); //Display roll value

    //Update tempScore
    var temporary = updateValue(rollValue);
    if (temporary === 0){
      playerOne.tempScore = 0;
    } else {
      playerOne.tempScore += temporary;
    };

    //Display tempScore
    $("#player-one-score").text("Temp score is = " + playerOne.tempScore);

    //Hold button to update totalScore and clear tempScore
    $("#hold").click(function(){
      playerOne.totalScore += temporary;
      playerOne.tempScore = 0;
      $("#player-one-score").text("Total score is = " + playerOne.totalScore + " and Temp score is = " + playerOne.tempScore);
    });//Hold button close

  });//form submit close

});//document ready close
