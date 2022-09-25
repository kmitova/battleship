import { getRandomIntInclusive } from "./playerShips.js";

let playerShips = 16;
let computerShips = 16;
let gameOver = false;
let computerWins = false;
let playerWins = false;
let playerTurn = true;
let computerTurn = false;

const resultDiv = document.querySelector(".result");

function attack() {
  const computerCells = Array.from(
    document.querySelectorAll(".computer-grid-item")
  );
  computerCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (!gameOver) {
        console.log(playerShips);
        console.log(computerShips);
        if (playerShips <= 0) {
          gameOver = true;
          computerWins = true;
          resultDiv.textContent =
            "Sorry, you lose, the computer found all of your ships.";
        }
        if (computerShips <= 0) {
          resultDiv.textContent =
            "Congrats, you won! You hit all of the computer's ships.";
          gameOver = true;
          playerWins = true;
        }
        if (playerTurn) {
          playerAttack(cell);
          playerTurn = false;
          computerTurn = true;
        }
        if (computerTurn) {
          computerAttack();
          playerTurn = true;
          computerTurn = false;
        }
      }
      if (gameOver) {
        console.log("game over");
        if (computerWins) {
          console.log("computer wins");
        } else if (playerWins) {
          console.log("player wins");
        }
        document.querySelector("main").style.display = "none";
        document.querySelector(".result").style.display = "block";
      }
    });
  });
}

function playerAttack(cell) {
  if (cell.classList.contains("filledC")) {
    computerShips--;
    cell.classList.remove("filledC");
    cell.classList.add("hit");
  } else {
    cell.classList.add("missed");
  }
}

function computerAttack() {
  const cellId = getRandomIntInclusive(1, 100);
  const cell = document.getElementById(Number(cellId));
  if (cell.classList.contains("filled")) {
    playerShips--;
    cell.classList.remove("filled");
    cell.classList.add("hit");
  } else {
    cell.classList.add("missed");
  }
}

export { attack };
