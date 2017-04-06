//business logic
function Game (currentPlayer) {
  this.currentPlayer = currentPlayer;
};

function Player(tempScore, totalScore) {
  this.tempScore = tempScore;
  this.totalScore = totalScore;
};

//Returns an integer beteween 1 and 6
function roll(){
  return Math.floor(Math.random()*6+1);
};

// Evaluates if number is equal to one, return value = 0.  Else, add number to value and return value.
Player.prototype.updateValue = function(number) {
  if (number === 1){
    this.tempScore = 0;
    $(".btn-danger").toggle();
  } else {
    this.tempScore += number;
  }
};

//user interface logic
$(document).ready(function(){
  var playerOne = new Player (0,0);
  var playerTwo = new Player (0,0);
  var newGame = new Game (playerOne);

  $("#player-one-score").text("Total score is = " + playerOne.totalScore);
  $("#player-two-score").text("Total score is = " + playerTwo.totalScore);

  //Roll die submit function
  $("#pig-game").submit(function(event){
    event.preventDefault();
    var rollValue = roll();
    $("#roll-value").text(rollValue); //Display roll value

    //Update tempScore for either player
    newGame.currentPlayer.updateValue(rollValue);

    //Display tempScore
    $("#temp-score").text("Temporary score is = " + newGame.currentPlayer.tempScore);

    //Hold button to update totalScore and clear tempScore for Player One
    $("#hold1").click(function(){
      $("#hold1").hide();
      $("#hold2").show();
      playerOne.totalScore += playerOne.tempScore;
      playerOne.tempScore = 0;
      $("#player-one-score").text("Total score is = " + playerOne.totalScore);
      $("#temp-score").text("Temporary score is = " + playerOne.tempScore);

      //Player one wins!
      if (playerOne.totalScore >= 100){
        $("#player-one-score").text("You Win!")
        $("#player-two-score").text("You Lose")
      };
      newGame.currentPlayer = playerTwo;
    });//Hold button close

    //Hold button to update totalScore and clear tempScore for Player Two
    $("#hold2").click(function(){
      $("#hold2").hide();
      $("#hold1").show();
      playerTwo.totalScore += playerTwo.tempScore;
      playerTwo.tempScore = 0;
      $("#player-two-score").text("Total score is = " + playerTwo.totalScore);
      $("#temp-score").text("Temporary score is = " + playerTwo.tempScore);

      //Player two wins!
      if (playerTwo.totalScore >= 100){
        $("#player-one-score").text("You Lose")
        $("#player-two-score").text("You Win!")
      };
      newGame.currentPlayer = playerOne;
    });//Hold button close
  });//form submit close
});//document ready close
