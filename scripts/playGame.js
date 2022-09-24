import { generateGrids } from "./grids.js";
import { placeShips } from "./playerShips.js";

function playGame() {
  generateGrids();
  document.querySelector(".player-grid-container").style.display = "block";
  placeShips();
}

export { playGame };
