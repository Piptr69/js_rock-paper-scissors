function getComputerChoice()
{
    let compChoice;
    let choice = Math.floor(Math.random() * 3 + 1);
    if(choice == 1) compChoice = "Rock";
    if(choice == 2) compChoice = "Paper";
    if(choice == 3) compChoice = "Scissors";
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
        let whoWon;
        if( playerSelection == "Rock")
    {
        if(computerSelection == "Rock") whoWon = "TIE";
        if(computerSelection == "Paper") whoWon = "COMPUTER WINS";
        if(computerSelection == "Scissors") whoWon = "PLAYER WINS";
    }
    if( playerSelection == "Paper")
    {
        if(computerSelection == "Rock") whoWon = "PLAYER WINS";
        if(computerSelection == "Paper") whoWon = "TIE";
        if(computerSelection == "Scissors") whoWon = "COMPUTER WINS";
    }
    if( playerSelection == "Scissors")
    {
        if(computerSelection == "Rock") whoWon = "COMPUTER WINS";
        if(computerSelection == "Paper") whoWon = "PLAYER WINS";
        if(computerSelection == "Scissors") whoWon = "TIE";
    }
    return whoWon;
}
    let playerScore = 0;
    let computerScore = 0;
  function game()
  {
    const playerSelection =prompt("Choose Rock, Paper or Scissors");
    const computerSelection = getComputerChoice();
    console.log("Computer chose: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    if(playRound(playerSelection, computerSelection) == "COMPUTER WINS") computerScore++;
    else if(playRound(playerSelection, computerSelection) == "PLAYER WINS") playerScore++;
  }
  game();
  game();
  game();
  game();
  game();
  console.log("Player score: " + playerScore);
  console.log("Computer score: " + computerScore);
