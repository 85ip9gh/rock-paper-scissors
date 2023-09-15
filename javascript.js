  document.getElementById("scissors-btn").addEventListener("click", function(){
        playGame("scissors");
    })
    document.getElementById("rock-btn").addEventListener("click", function(){
        playGame("rock");
    })
    
    document.getElementById("paper-btn").addEventListener("click", function(){
        playGame("paper");
    })

    let round = 0;
    let playerWins = 0;
    let computerWins = 0;

    let displayRoundResult =  document.getElementById("display-round-result");
    let displayRound = document.getElementById("display-round");
    let displayWinner = document.getElementById("display-winner");
    let displayFinalResult = document.getElementById("display-final-result");
    
    
    function getComputerChoice(){
        const choice = [];
        choice.push("rock","paper","scissors")
        return choice[Math.floor( Math.random()*(3))];
    }
    
    function playGame(playerChoice){
        console.log(playerWins);
        
        let roundResult = playRound(playerChoice, getComputerChoice());
        
        if(roundResult.includes("win")){
            playerWins += 1;
            round += 1;
        } else if(roundResult.includes("lose")){
            computerWins += 1;
            round += 1;
        }

        displayRound.innerHTML = ("Round: " + round);
        displayRoundResult.innerHTML = (roundResult);
        
            if(round == 5){
                if(playerWins > computerWins){
                    displayFinalResult.innerHTML = ("You Win the Game! " + "Score: " + playerWins + "/5");
                } else {
                    displayFinalResult.innerHTML = ("You Lose the Game! " + "Score: " + playerWins + "/5");
                }
            }
    }
    
    function playRound(playerSelection, computerSelection){
        const playerSelect = playerSelection.toLowerCase();
        if(playerSelect == "rock"){
            if(computerSelection == "rock"){
                return ("draw");
            }
            if(computerSelection == "paper"){
                return ("Computer: " + computerSelection + "\nYou lose! Paper beats Rock!")
            }
            if(computerSelection == "scissors"){
                return ("Computer: " + computerSelection + "\nYou win! Rock beats Scissors!")
            }
        } else if(playerSelect == "paper"){
            if(computerSelection == "rock"){
                return ("Computer: " + computerSelection + "\nYou win! Paper beats Rock!")
            }
            if(computerSelection == "paper"){
                return ("draw");
            }
            if(computerSelection == "scissors"){
                return ("Computer: " + computerSelection + "\nYou lose! Scissors beat paper!")
            }
        } else if(playerSelect == "scissors"){
            if(computerSelection == "rock"){
                return ("Computer: " + computerSelection + "\nYou lose! Rock beats Scissors!")
            }
            if(computerSelection == "paper"){
                return ("Computer: " + computerSelection + "\nYou win! Scissors beat Paper!")
            }
            if(computerSelection == "scissors"){
                return ("draw");
            }
        }
                
    
    }
  

