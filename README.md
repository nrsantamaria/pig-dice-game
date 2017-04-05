## Specifications:

| Behavior |  Input   |  Output  |
|----------|:--------:|:--------:|
|Users begin with a Total Score of 0 and the score is displayed on the screen. | n/a | score of 0. |
|User will push roll die button and a random number between 1-6 will be displayed in output section | click roll button | either 1-6 |
|RESULTING ROLL IS A ONE|||
|Program will evaluate if the result is 1 or not a 1. If the result is a 1 the program will clear the player's tempScore| 1 | score of 0 |
|RESULTING ROLL IS NOT A ONE|||
|Program will evaluate if the result is not a 1. The program stores this value in a variable called tempScore.| 3 | N/A |
|Step A) Continuation of if the result is not a 1, the player can choose to hold by clicking a hold button.  If the user clicks hold, the program will add tempScore to the user's total score and display the new total score | Score is 0 and roll is 3 | Score = 3 |
|Step B) Continuation of if the result is not a 1, if the player does not "hold" they will click the roll die button. | click roll button | either 1-6 |
|The program will add the roll value to the tempScore variable| Total Score = 0, tempScore = 3, roll value = 5 | tempScore = 8 |
|Repeat steps A and B until player clicks hold button |||
|GAME END|||
|The first player's to have a total score of >= 100 will end the game!| Player 2 Total score = 100 | You Win! |


Refactor for Friday!

//business logic
function Player(totalScore) {
  this.totalScore = totalScore;
  this.tempScore;
};
function Game(){
  this.currentPlayer;
}

//Returns an integer beteween 1 and 6
function roll(){
  return Math.floor(Math.random()*6+1);
};

// Evaluates if number is equal to one, return value = 0.  Else, add number to value and return value.
Player.prototype.updateValue=function(number){
  if(number ===1){
    this.tempScore = 0
  }
  else{
    this.tempScore += number;
  }
}
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
  var newGame = new Game();
  var playerOne = new Player (0);
  var playerTwo = new Player (0);
  newGame.currentPlayer = playerOne;
  var tempScore = 0;

  $("#player-one-score").text("Total score is = " + playerOne.totalScore);
  $("#player-two-score").text("Total score is = " + playerTwo.totalScore);

  //Roll die submit function
  $("#pig-game").submit(function(event){
    event.preventDefault();
    var rollValue = roll();
    $("#roll-value").text(rollValue); //Display roll value

    //Update tempScore for either player
    newGame.currentPlayer.updateValue(rollValue);
    if (temporary === 0){
      tempScore = 0;
      $(".btn-danger").toggle();
    } else {
      tempScore += temporary;
    };

    //Display tempScore
    $("#temp-score").text("Temporary score is = " + tempScore);

    //Hold button to update totalScore and clear tempScore for Player One
    $("#hold1").click(function(){
      $("#hold1").hide();
      $("#hold2").show();
      playerOne.totalScore += tempScore;
      tempScore = 0;
      $("#player-one-score").text("Total score is = " + playerOne.totalScore);
      //Player one wins!
      if (playerOne.totalScore >= 100){
        $("#player-one-score").text("You Win!")
        $("#player-two-score").text("You Lose :(")
      };
      newGame.currentPlayer = playerTwo;
    });//Hold button close

    //Hold button to update totalScore and clear tempScore for Player Two
    $("#hold2").click(function(){
      $("#hold2").hide();
      $("#hold1").show();
      playerTwo.totalScore += tempScore;
      tempScore = 0;
      $("#player-two-score").text("Total score is = " + playerTwo.totalScore);
      //Player two wins!
      if (playerTwo.totalScore >= 100){
        $("#player-one-score").text("You Lose :(")
        $("#player-two-score").text("You Win!")
      };
    });//Hold button close
  });//form submit close
});//document ready close
