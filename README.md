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
