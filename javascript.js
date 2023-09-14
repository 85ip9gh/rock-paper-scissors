function getComputerChoice(){
    const choice = [];
    choice.push("rock","paper","scissors")
    return choice[Math.floor( Math.random()*(3))];
}

function getPlayerChoice(){
    return playerChoice = prompt("Choose rock, paper, or scissors!");
}

function playGame(){
    let playerWins = 0;
    let computerWins = 0;
    
    for(i=0;i<5;i++){    
        let roundResult = playRound(getPlayerChoice(), getComputerChoice());
        console.log("Round: " + (i+1) + "\n" + roundResult);
        if(roundResult.includes("win")){
            playerWins += 1;
        } else{
            computerWins += 1;
        }
    }

    if(playerWins > computerWins){
        console.log("You win the Game! \nTotal Score: " + playerWins + "/5");
    } else{
        console.log("You lose! \nTotal Score: " + playerWins + "/5");
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