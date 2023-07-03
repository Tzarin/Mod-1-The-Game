//Button
document.getElementById('rockButton').addEventListener('click', () => playGame('rock'));
document.getElementById('paperButton').addEventListener('click', () => playGame('paper'));
document.getElementById('scissorsButton').addEventListener('click', () => playGame('scissors'));
document.getElementById('startTimer').addEventListener('click', startTimer);
document.getElementById('reset').addEventListener('click', resetGame);


// Game logic
let playerScore = 0;
let computerScore = 0;
let totalGames = 0;
let timerInterval; 
let timerSeconds = 0;

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result;

  if (playerChoice === computerChoice) {
    result = "It's a tie, no one wins!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') 
  ) {
    result = 'Player wins!';
    playerScore++;
  } else {
    result = 'Player loses!';
    computerScore++;
  }

  totalGames++; 

  document.getElementById('result').innerText = `Player chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
  document.getElementById('playerScore').innerText = playerScore;
  document.getElementById('computerScore').innerText = computerScore;
}

// Function to player score
function incrementScore() {
  playerScore++;
  document.getElementById('playerScore').innerText = playerScore;
}

// Function to end the game
function endGame() {
  document.getElementById('result').innerText = 'Game Over!';
  
}

// Function to reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  totalGames = 0;
  document.getElementById('result').innerText = '';
  document.getElementById('playerScore').innerText = playerScore;
  document.getElementById('computerScore').innerText = computerScore;
  document.getElementById('timer').innerText = '';
  clearInterval(timerCountdown);
    document.getElementById('startTimer').disabled = false;
}



// Function to  timer
function startTimer() {
  const durationInSeconds = 60;

  let timeRemaining = durationInSeconds;
  document.getElementById('timer').innerText = timeRemaining;

  timerCountdown = setInterval(() => {
      timeRemaining--;
      document.getElementById('timer').innerText = timeRemaining;

      if (timeRemaining <= 0) {
          clearInterval(timerCountdown);
          endGame();
      }
  }, 1000); 

  
  document.getElementById('startTimer').disabled = true;
}