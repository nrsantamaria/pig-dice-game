// //business logic
// function Player(tempScore,totalScore) {
//   this.tempScore = tempScore;
//   this.totalScore = totalScore;
// };
//
// //Returns an integer beteween 1 and 6
// function roll(){
//   return Math.floor(Math.random()*6+1);
// };
//
// // Evaluates if number is equal to one, return value = 0.  Else, add number to value and return value.
// function updateValue (number) {
//   var value = 0;
//   if (number === 1){
//     value = 0;
//   } else {
//     value += number;
//   }
//   return value;
// };

// //user interface logic
// $(document).ready(function(){
//   var playerOne = new Player (0,0);
//   var playerTwo = new Player (0,0);
//   $("#player-one-score").text("Total score is = " + playerOne.totalScore);
//
//   //Roll die submit function
//   $("#pig-game").submit(function(event){
//     event.preventDefault();
//     debugger;
//     var rollValue = roll();
//     $("#roll-value").text(rollValue); //Display roll value
//
//     //Update tempScore for player 1
//     var temporary = updateValue(rollValue);
//     if (temporary === 0){
//       playerOne.tempScore = 0;
//     } else {
//       playerOne.tempScore += temporary;
//     };
//
//     //Display tempScore
//     $("#player-one-score").text("Temp score is = " + playerOne.tempScore);
//
//     //Hold button to update totalScore and clear tempScore
//     $("#hold").click(function(){
//       debugger;
//       playerOne.totalScore += temporary;
//       playerOne.tempScore = 0;
//       $("#player-one-score").text("Total score is = " + playerOne.totalScore + " and Temp score is = " + playerOne.tempScore);
//     });//Hold button close
//
//   });//form submit close
//
// });//document ready close

//business logic
function Player(totalScore) {
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
  var playerOne = new Player (0);
  var playerTwo = new Player (0);
  var tempScore = 0;

  $("#player-one-score").text("Total score is = " + playerOne.totalScore);
  $("#player-two-score").text("Total score is = " + playerTwo.totalScore);

  //Roll die submit function
  $("#pig-game").submit(function(event){
    event.preventDefault();
    var rollValue = roll();
    $("#roll-value").text(rollValue); //Display roll value

    //Update tempScore for either player
    var temporary = updateValue(rollValue);
    if (temporary === 0){
      tempScore = 0;

    } else {
      tempScore += temporary;
    };

    //Display tempScore
    $("#temp-score").text("Temp score is = " + tempScore);

    //Hold button to update totalScore and clear tempScore for Player One
    $("#hold1").click(function(){
      // $("#hold1").hide();
      // $("#hold2").show();
      playerOne.totalScore += tempScore;
      tempScore = 0;
      $("#player-one-score").text("Total score is = " + playerOne.totalScore);
      //Player one wins!
      if (playerOne.totalScore >= 100){
        $("#player-one-score").text("You Win!")
        $("#player-two-score").text("You Lose :(")
      };
    });//Hold button close
    //Hold button to update totalScore and clear tempScore for Player Two

    $("#hold2").click(function(){
      // $("#hold2").hide();
      // $("#hold1").show();
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
