import { attack } from "./attackFunctions.js";
import { playGame } from "./playGame.js";

const startBtn = document.getElementById("name-btn");
const playAgainBtn = document.getElementById("play-again");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  playGame();
  attack();
  playAgainBtn.style.display = "block";
  document.querySelector(".instructions").style.display = "none";
});

playAgainBtn.addEventListener("click", () => {
  location.reload();
});
