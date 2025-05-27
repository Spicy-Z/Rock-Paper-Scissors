function getComputerChoice() {
  let number = Math.floor(Math.random() * 100 + 1);
  let choice;
  if (number <= 33) {
    choice = "Rock";
  } else if (number > 33 && number <= 66) {
    choice = "Paper";
  } else if (number > 66 && number <= 100) {
    choice = "Sissors";
  }
  return choice;
}

function chosenValues(human, computer) {
  let player = document.querySelector("#playerSelect");
  let comp = document.querySelector("#computerSelect");

  player.textContent = `You selected: ${human}`;
  comp.textContent = `Computer selected: ${computer}`;
}

function playRound(humanChoice, computerChoice) {
  let winner;

  chosenValues(humanChoice, computerChoice);

  if (
    (computerChoice == "Paper" && humanChoice == "Rock") ||
    (computerChoice == "Sissors" && humanChoice == "Paper") ||
    (computerChoice == "Rock" && humanChoice == "Sissors")
  ) {
    winner = 0;
  } else if (computerChoice == humanChoice) {
  } else {
    winner = 1;
  }
  return winner;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let winner;

  let selections = document.querySelector("#selectors");
  let score = document.querySelector("#scores");
  let win = document.querySelector("#winner");

  selections.addEventListener("click", (e) => {
    score.textContent = `Your Score: ${humanScore} \nComputer Score: ${computerScore}`;
    if (humanScore == 5 || computerScore == 5) {
      win.textContent = humanScore > computerScore ? "You Win!" : "You Lose :(";
      e.target.preventDefault();
    }
    let humanChoice = e.target.id;
    winner = playRound(humanChoice, getComputerChoice());
    winner == 1 ? humanScore++ : computerScore++;
  });
}

playGame();
