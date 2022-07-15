let computerPlay = () => {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};
// console.log(computerPlay());

//player input

let player = () => {
  let input = prompt("Rock, Paper or Scissors");
  let lower = input.toLowerCase();
  if (lower === "rock") {
    return "rock";
  } else if (lower === "paper") {
    return "paper";
  } else if (lower === "scissors") {
    return "scissors";
  } else {
    return `${input} is an error`;
  }
};

// console.log(player());

let playerSelection = player();
let computerSelection = computerPlay();

let playRound = () => {
  if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    return `It is a draw ${playerSelection} can not beat ${computerSelection}!`;
  }

  //player wins
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `Player wins ${playerSelection} beats ${computerSelection}!!`;
  }
  //computer wins
  else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return `Computer wins ${computerSelection} beats ${playerSelection}!!`;
  }

  else {
    return `${playerSelection}!!`;
  }
};
let play = playRound();

let game = () => {

  for (let i = 0; i < 5; i++){
 console.log (play);
}
}
game();