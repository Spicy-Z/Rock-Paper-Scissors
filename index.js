// Computer Choice
function getComputerChoice() {
    let number = Math.floor(Math.random() * 100 + 1)
    let choice
    if (number <= 33) {
        choice = "Rock"
    } else if (number > 33 && number <= 66) {
        choice = "Paper"
    } else if (number > 66 && number <= 100) {
        choice = "Sissors"
    };
    return choice;
}

// Human Choice
function fixHumanChoice(choice) {
    let char = choice.charAt(0).toUpperCase();
    let rest = choice.slice(1, choice.length).toLowerCase();
    let fixedChoice = char + rest

    return fixedChoice;
}

function getHumanChoice() {
    let human = prompt("Enter Rock, Paper or Sissors: ");
    let check = human.toUpperCase();

    while (check == null || check != "ROCK" && check != "PAPER" && check != "SISSORS") {
        human = prompt("Enter Rock, Paper or Sissors: ");
        check = human.toUpperCase();
    }
    let humanChoice = fixHumanChoice(human);

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let winnerText
    let winner
    console.log("Computer Choice: " + computerChoice)
    console.log("Your Choice: " + humanChoice)
    if (computerChoice == "Paper" && humanChoice == "Rock" ||
        computerChoice == "Sissors" && humanChoice == "Paper" ||
        computerChoice == "Rock" && humanChoice == "Sissors"
    ) {
        winnerText = "You lose! " + computerChoice + " beats " + humanChoice
        winner = 0;
    } else if (computerChoice == humanChoice) {
        winnerText = "It's a tie!"
    } else {
        winnerText = "You win! " + humanChoice + " beats " + computerChoice
        winner = 1;
    }

    console.log(winnerText)
    console.log("-------------------------------------------------------")
    return winner;
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    let winner;
    
    alert("We are playing a game of Rock Paper Sissors up to 5 rounds")
    
    for (i = 0; i < 5; i++) {
        let result = playRound(getHumanChoice(), getComputerChoice())
        
        if (result == 0) {
            computerScore++
        } else if (result == 1) {
            humanScore++
        }
    }

    if (computerScore > humanScore) {
        winner = "Winner is Computer"
    } else if (humanScore > computerScore){
        winner = "Winner is Human"
    } else {
        winner = "It's a Tie"
    }

    return winner

}



console.log(playGame())

