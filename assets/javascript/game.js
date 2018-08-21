//Global Variables----------------------------------------------------
var scoreToWin = 0;
var playerScore = 0;
var wins = "Wins: " + 0;
$('#winsCounter').text(wins);
var losses = "Losses: " + 0;
$('#loseCounter').text(losses);
//gamecards
var ace = $("#ace").get(0);
var king = $("#king").get(0);
var queen = $("#queen").get(0);
var jack = $("#jack").get(0);

//Generating random number 1-120 for scoreToWin var
scoreToWin = Math.floor(Math.random()*(119)+1);
$('#scoreToMatch').text(scoreToWin);
//test and debugging
console.log("score to win is " + scoreToWin);

//Genertating random value 1-12 for cards
ace = Math.floor(Math.random()*(11)+1);
king = Math.floor(Math.random()*(11)+1);
queen = Math.floor(Math.random()*(11)+1);
jack = Math.floor(Math.random()*(11)+1);
//testing and debugging
console.log("ace equals " + ace);
console.log("king equals " + king);
console.log("queen equals " + queen);
console.log("jack equals " + jack);

//playerscore
$('#playerscore').text(playerScore);
//testing and debugging
console.log(playerScore);



//Functions------------------------------------------------------------

//On click functions
$( "#ace" ).click(function() {
    $('#playerscore').text(playerScore);
    playerScore = parseInt(ace) + parseInt(playerScore);
  });
  $( "#king" ).click(function() {
    $('#playerscore').text(playerScore);
    playerScore = parseInt(king) + parseInt(playerScore);
  });
  $( "#queen" ).click(function() {
    $('#playerscore').text(playerScore);
    playerScore = parseInt(queen) + parseInt(playerScore);
  });
  $( "#jack" ).click(function() {
    $('#playerscore').text(playerScore);
    playerScore = parseInt(jack) + parseInt(playerScore);
  });

//Game logic
if (playerScore === scoreToWin){
    
}
