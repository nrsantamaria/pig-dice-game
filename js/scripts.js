//business logic
function Player(totalScore) {
  this.totalScore = 2;
};

function rollValue(){
  return Math.floor(Math.random()*6+1);
};

//user interface logic
$(document).ready(function(){
  $("#pig-game").submit(function(event){
    event.preventDefault();

    var playerOne = new Player ();
    var playerTwo = new Player ();

    $("#player-one-score").text(playerOne.totalScore);
    $("#player-two-score").text(playerTwo.totalScore);


  });//form submit close
});//document ready close
