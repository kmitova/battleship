import { attack } from "./attackFunctions.js";
import { playGame } from "./playGame.js";

const startBtn = document.getElementById("name-btn");
startBtn.addEventListener("click", () => {
  playGame();
  attack();
});
