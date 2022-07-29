let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

let getComputerChoice = () => {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

let convertToWord = (letter) => {
  if (letter === "r") return "Rock";
  if (letter === "p") return "paper";
  return "Scissors";
};

let win = (user, computer) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  // const smallUserWord = "user".fontsize(3).sub();
  // const smallCompWord = "comp".fontsize(3);
  result_p.innerHTML = `${convertToWord(
    user
  )}  beats ${convertToWord(
    computer
  )}. you win!! 🔥 `;
};
let lose = (user, computer) => {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(
    computer
  )}. Computer wins!! 🔥 `;
};
let draw = (user, computer) => {
  result_p.innerHTML = `${convertToWord(user)} ${convertToWord(
    computer
  )}. It'\s a draw 🔥 `;
}
//game rules

let game = (userChoice) => {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);

      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);

      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);

      break;
  }
};
game();
let main = () => {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
};
main();
