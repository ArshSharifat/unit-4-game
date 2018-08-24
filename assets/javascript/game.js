//Global Variables----------------------------------------------------
var playerScore = 0;
var wins = 0;
var losses = 0;

//Generating random number 1-120 for scoreToWin var
scoreToWin = Math.floor(Math.random() * (120) + 19);
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

// On click for ace
$("#ace").click(function () {
    playerScore = parseInt(ace) + parseInt(playerScore);
    $('#playerscore').text(playerScore);
    //if else if for when player score matches or goes over score to win
    if (playerScore === scoreToWin) {
        // adding to a win counter
        wins++;
        $('#winsCounter').text(wins);
        // reseting player score
        playerScore = 0;
        $('#playerscore').text(playerScore);
        // generating new random score to win
        scoreToWin = Math.floor(Math.random() * (120) + 1);
        $('#scoreToMatch').text(scoreToWin);
        $('#result').text("You won!");
        //test and debugging
        console.log("score to win is " + scoreToWin);
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
        // adding to a lose counter
        losses++;
        $('#loseCounter').text(losses);
        // reseting player score
        playerScore = 0;
        $('#playerscore').text(playerScore);
        // generating new random score to win
        scoreToWin = Math.floor(Math.random() * (120) + 1);
        $('#scoreToMatch').text(scoreToWin);
        $('#result').text("You lost!");
        //test and debugging
        console.log("score to win is " + scoreToWin);
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

// on click for king
$("#king").click(function () {
    playerScore = parseInt(king) + parseInt(playerScore);
    $('#playerscore').text(playerScore);
    //if else if for when player score matches or goes over score to win
    if (playerScore === scoreToWin) {
        // adding to a win counter
        wins++;
        $('#winsCounter').text(wins);
        // reseting player score
        playerScore = 0;
        $('#playerscore').text(playerScore);
        // generating new random score to win
        scoreToWin = Math.floor(Math.random() * (120) + 1);
        $('#scoreToMatch').text(scoreToWin);
        $('#result').text("You won!");
        //test and debugging
        console.log("score to win is " + scoreToWin);
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
        // adding to a lose counter
        losses++;
        $('#loseCounter').text(losses);
        // reseting player score
        playerScore = 0;
        $('#playerscore').text(playerScore);
        // generating new random score to win
        scoreToWin = Math.floor(Math.random() * (120) + 1);
        $('#scoreToMatch').text(scoreToWin);
        $('#result').text("You lost!");
        //test and debugging
        console.log("score to win is " + scoreToWin);
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

// on click for queen
$("#queen").click(function () {
    playerScore = parseInt(queen) + parseInt(playerScore);
    $('#playerscore').text(playerScore);
    //if else if for when player score matches or goes over score to win
    if (playerScore === scoreToWin) {
        // adding to a win counter
        wins++;
        $('#winsCounter').text(wins);
        // reseting player score
        playerScore = 0;
        $('#playerscore').text(playerScore);
        // generating new random score to win
        scoreToWin = Math.floor(Math.random() * (120) + 1);
        $('#scoreToMatch').text(scoreToWin);
        //test and debugging
        console.log("score to win is " + scoreToWin);
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
        // adding to a lose counter
        losses++;
        $('#loseCounter').text(losses);
        // reseting player score
        playerScore = 0;
        $('#playerscore').text(playerScore);
        // generating new random score to win
        scoreToWin = Math.floor(Math.random() * (120) + 1);
        $('#scoreToMatch').text(scoreToWin);
        $('#result').text("You lost!");
        //test and debugging
        console.log("score to win is " + scoreToWin);
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

// on click for jack
$("#jack").click(function () {
    playerScore = parseInt(jack) + parseInt(playerScore);
    $('#playerscore').text(playerScore);
    //if else if for when player score matches or goes over score to win
    if (playerScore === scoreToWin) {
        // adding to a win counter
        wins++;
        $('#winsCounter').text(wins);
        // reseting player score
        playerScore = 0;
        $('#playerscore').text(playerScore);
        // generating new random score to win
        scoreToWin = Math.floor(Math.random() * (120) + 1);
        $('#scoreToMatch').text(scoreToWin);
        //test and debugging
        console.log("score to win is " + scoreToWin);
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
        // adding to a lose counter
        losses++;
        $('#loseCounter').text(losses);
        // reseting player score
        playerScore = 0;
        $('#playerscore').text(playerScore);
        // generating new random score to win
        scoreToWin = Math.floor(Math.random() * (120) + 1);
        $('#scoreToMatch').text(scoreToWin);
        $('#result').text("You lost!");
        //test and debugging
        console.log("score to win is " + scoreToWin);
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




