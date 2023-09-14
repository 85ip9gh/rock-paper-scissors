function getComputerChoice(){
    const choice = [];
    choice.push("rock","paper","scissors")
    return choice[Math.floor( Math.random()*(3))];
}

function getPlayerChoice(){

}

function playRound(playerSelection, computerSelection){
    const playerSelect = playerSelection.toLowercase();
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