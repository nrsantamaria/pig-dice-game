//business logic
function Game (player1, player2) {
  this.currentPlayer = player1;
  this.players = [player1, player2];
};

function Player(tempScore, totalScore) {
  this.tempScore = tempScore;
  this.totalScore = totalScore;
};

//Returns an integer beteween 1 and 6
Game.prototype.roll = function (){
  return Math.floor(Math.random()*6+1);
};

//Updates the tempScore for the current player based on the roll value.  This function also switches the current player if the roll equals 1.
Game.prototype.updateValue = function(number) {
  if (number === 1){
    this.currentPlayer.tempScore = 0;
    $(".btn-danger").toggle();
    if(this.currentPlayer === this.players[0]){
      this.currentPlayer = this.players[1];
    } else{
      this.currentPlayer = this.players[0];
    }
  } else {
    this.currentPlayer.tempScore += number;
  }
};

//user interface logic
$(document).ready(function(){
  var playerOne = new Player (0,0);
  var playerTwo = new Player (0,0);
  var newGame = new Game (playerOne, playerTwo);
  $("#player-one-score").text("Total score is = " + playerOne.totalScore);
  $("#player-two-score").text("Total score is = " + playerTwo.totalScore);

  //Roll die submit function
  $("#pig-game").submit(function(event){
    event.preventDefault();
    var rollValue = newGame.roll();
    $("#roll-value").text(rollValue); //Display roll value

    //Update tempScore for either player
    newGame.updateValue(rollValue);

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
      newGame.currentPlayer = playerTwo;  //Switch current player
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
      newGame.currentPlayer = playerOne; //Switch current player
    });//Hold button close
  });//form submit close
});//document ready close
