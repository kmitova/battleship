import { getRandomIntInclusive } from "./playerShips.js";

let playerShips = 16;
let computerShips = 16;
let gameOver = false;
let computerWins = false;
let playerWins = false;
let playerTurn = true;
let computerTurn = false;
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
        }
        if (computerShips <= 0) {
          gameOver = true;
          playerWins = true;
        }
        if (playerTurn) {
          playerAttack(cell);
          playerTurn = false;
          computerTurn = true;
        }
        if (computerTurn) {
          let hasAttacked = false;
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
  let hasAttacked = false;
  const cellId = getRandomIntInclusive(1, 100);
  console.log("cell id" + cellId);
  const cell = document.getElementById(Number(cellId));
  if (cell.classList.contains("filled")) {
    playerShips--;
    cell.classList.remove("filled");
    cell.classList.add("hit");
  } else {
    cell.classList.add("missed");
  }
  hasAttacked = true;
  console.log(hasAttacked);
}

export { attack };
