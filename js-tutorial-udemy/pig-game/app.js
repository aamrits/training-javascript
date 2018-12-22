/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, activePlayer, roundScore, playState;

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    playState = true;

    document.getElementById("current-0").innerHTML = 0;
    document.getElementById("score-0").innerHTML = 0;
    document.getElementById("current-1").innerHTML = 0;
    document.getElementById("score-1").innerHTML = 0;

    document.querySelector(".dice").style.display = "none";
}
//initiate the game
init();

//when user clicks dice roll 
document.querySelector(".btn-roll").addEventListener("click", function() {
    if(playState) {
        //1. Random number
        var dice = (Math.floor(Math.random() * 6)) + 1;  

        //2. Display the result 
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice").src = "dice-" + dice + ".png";

        //3. Update the score. if player rolls 1, all his scores is lost
        if(dice !== 1) {         
            roundScore += dice;  
            document.getElementById("current-" + activePlayer).innerHTML = roundScore;
        } else {
            nextPlayer();
        }
    }      
});

//when user clicks new game 
document.querySelector(".btn-new").addEventListener("click", init);

//when user clicks new game 
document.querySelector(".btn-hold").addEventListener("click", function() {
    if(playState) {
        //add current score toglobal score
        scores[activePlayer] += roundScore;

        //update UI
        document.getElementById("score-" + activePlayer).innerHTML = scores[activePlayer];

        //check if the player has won
        if(scores[activePlayer] > 20) {
            document.getElementById("name-" + activePlayer).innerHTML = "WINNER!";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            playState = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    console.log("active: " + activePlayer);

    document.getElementById("current-0").innerHTML = 0;
    document.getElementById("current-1").innerHTML = 0;

    document.querySelector(".player-0-panel").classList.toggle("active");  
    document.querySelector(".player-1-panel").classList.toggle("active");  
    
    document.querySelector(".dice").style.display = "none";
}





