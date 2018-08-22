//Global Variables----------------------------------------------------
var playerScore = 0;
var wins = 0;
var losses = 0;

//Generating random number 1-120 for scoreToWin var
scoreToWin = Math.floor(Math.random() * (120) + 1);
$('#scoreToMatch').text(scoreToWin);
//test and debugging
console.log("score to win is " + scoreToWin);

//gamecards
var ace = $("#ace").get(0);
var king = $("#king").get(0);
var queen = $("#queen").get(0);
var jack = $("#jack").get(0);
//Genertating random value 1-12 for cards
ace = Math.floor(Math.random() * (12) + 1);
king = Math.floor(Math.random() * (12) + 1);
queen = Math.floor(Math.random() * (12) + 1);
jack = Math.floor(Math.random() * (12) + 1);
//testing and debugging
console.log("ace equals " + ace);
console.log("king equals " + king);
console.log("queen equals " + queen);
console.log("jack equals " + jack);

//Variables to HTML
$('#playerscore').text(playerScore);
$('#winsCounter').text(wins);
$('#loseCounter').text(losses);





//Functions------------------------------------------------------------

//On click functions
$("#ace").click(function () {
    playerScore = parseInt(ace) + parseInt(playerScore);
    $('#playerscore').text(playerScore);
    if (playerScore === scoreToWin) {
        wins++;
        $('#winsCounter').text(wins);
        playerScore = 0;
        $('#playerscore').text(playerScore);
        scoreToWin = Math.floor(Math.random() * (120) + 1);
        $('#scoreToMatch').text(scoreToWin);
        $('#result').text("You won!");
        //Genertating random value 1-12 for cards
        ace = Math.floor(Math.random() * (12) + 1);
        king = Math.floor(Math.random() * (12) + 1);
        queen = Math.floor(Math.random() * (12) + 1);
        jack = Math.floor(Math.random() * (12) + 1);
        //testing and debugging
        console.log("ace equals " + ace);
        console.log("king equals " + king);
        console.log("queen equals " + queen);
        console.log("jack equals " + jack);
    } else if (playerScore > scoreToWin) {
        losses++;
        $('#loseCounter').text(losses);
        playerScore = 0;
        $('#playerscore').text(playerScore);
        scoreToWin = Math.floor(Math.random() * (120) + 1);
        $('#scoreToMatch').text(scoreToWin);
        $('#result').text("You lost!");
        //Genertating random value 1-12 for cards
        ace = Math.floor(Math.random() * (12) + 1);
        king = Math.floor(Math.random() * (12) + 1);
        queen = Math.floor(Math.random() * (12) + 1);
        jack = Math.floor(Math.random() * (12) + 1);
        //testing and debugging
        console.log("ace equals " + ace);
        console.log("king equals " + king);
        console.log("queen equals " + queen);
        console.log("jack equals " + jack);
    }
});
$("#king").click(function () {
    playerScore = parseInt(king) + parseInt(playerScore);
    $('#playerscore').text(playerScore);
    if (playerScore === scoreToWin) {
        wins++;
        $('#winsCounter').text(wins);
        playerScore = 0;
        $('#playerscore').text(playerScore);
        scoreToWin = Math.floor(Math.random() * (120) + 1);
        $('#scoreToMatch').text(scoreToWin);
        $('#result').text("You won!");
        //Genertating random value 1-12 for cards
        ace = Math.floor(Math.random() * (12) + 1);
        king = Math.floor(Math.random() * (12) + 1);
        queen = Math.floor(Math.random() * (12) + 1);
        jack = Math.floor(Math.random() * (12) + 1);
        //testing and debugging
        console.log("ace equals " + ace);
        console.log("king equals " + king);
        console.log("queen equals " + queen);
        console.log("jack equals " + jack);
    } else if (playerScore > scoreToWin) {
        losses++;
        $('#loseCounter').text(losses);
        playerScore = 0;
        $('#playerscore').text(playerScore);
        scoreToWin = Math.floor(Math.random() * (120) + 1);
        $('#scoreToMatch').text(scoreToWin);
        $('#result').text("You lost!");
        //Genertating random value 1-12 for cards
        ace = Math.floor(Math.random() * (12) + 1);
        king = Math.floor(Math.random() * (12) + 1);
        queen = Math.floor(Math.random() * (12) + 1);
        jack = Math.floor(Math.random() * (12) + 1);
        //testing and debugging
        console.log("ace equals " + ace);
        console.log("king equals " + king);
        console.log("queen equals " + queen);
        console.log("jack equals " + jack);
    }
});
$("#queen").click(function () {
    playerScore = parseInt(queen) + parseInt(playerScore);
    $('#playerscore').text(playerScore);
    if (playerScore === scoreToWin) {
        wins++;
        $('#winsCounter').text(wins);
        playerScore = 0;
        $('#playerscore').text(playerScore);
        scoreToWin = Math.floor(Math.random() * (120) + 1);
        $('#scoreToMatch').text(scoreToWin);
        //Genertating random value 1-12 for cards
        ace = Math.floor(Math.random() * (12) + 1);
        king = Math.floor(Math.random() * (12) + 1);
        queen = Math.floor(Math.random() * (12) + 1);
        jack = Math.floor(Math.random() * (12) + 1);
        $('#result').text("You won!");
        //testing and debugging
        console.log("ace equals " + ace);
        console.log("king equals " + king);
        console.log("queen equals " + queen);
        console.log("jack equals " + jack);
    } else if (playerScore > scoreToWin) {
        losses++;
        $('#loseCounter').text(losses);
        playerScore = 0;
        $('#playerscore').text(playerScore);
        scoreToWin = Math.floor(Math.random() * (120) + 1);
        $('#scoreToMatch').text(scoreToWin);
        $('#result').text("You lost!");
        //Genertating random value 1-12 for cards
        ace = Math.floor(Math.random() * (12) + 1);
        king = Math.floor(Math.random() * (12) + 1);
        queen = Math.floor(Math.random() * (12) + 1);
        jack = Math.floor(Math.random() * (12) + 1);
        //testing and debugging
        console.log("ace equals " + ace);
        console.log("king equals " + king);
        console.log("queen equals " + queen);
        console.log("jack equals " + jack);
    }
});
$("#jack").click(function () {
    playerScore = parseInt(jack) + parseInt(playerScore);
    $('#playerscore').text(playerScore);
    if (playerScore === scoreToWin) {
        wins++;
        $('#winsCounter').text(wins);
        playerScore = 0;
        $('#playerscore').text(playerScore);
        scoreToWin = Math.floor(Math.random() * (120) + 1);
        $('#scoreToMatch').text(scoreToWin);
        //Genertating random value 1-12 for cards
        ace = Math.floor(Math.random() * (12) + 1);
        king = Math.floor(Math.random() * (12) + 1);
        queen = Math.floor(Math.random() * (12) + 1);
        jack = Math.floor(Math.random() * (12) + 1);
        $('#result').text("You won!");
        //testing and debugging
        console.log("ace equals " + ace);
        console.log("king equals " + king);
        console.log("queen equals " + queen);
        console.log("jack equals " + jack);
    } else if (playerScore > scoreToWin) {
        losses++;
        $('#loseCounter').text(losses);
        playerScore = 0;
        $('#playerscore').text(playerScore);
        scoreToWin = Math.floor(Math.random() * (120) + 1);
        $('#scoreToMatch').text(scoreToWin);
        $('#result').text("You lost!");
        //Genertating random value 1-12 for cards
        ace = Math.floor(Math.random() * (12) + 1);
        king = Math.floor(Math.random() * (12) + 1);
        queen = Math.floor(Math.random() * (12) + 1);
        jack = Math.floor(Math.random() * (12) + 1);
        //testing and debugging
        console.log("ace equals " + ace);
        console.log("king equals " + king);
        console.log("queen equals " + queen);
        console.log("jack equals " + jack);
    }
});




