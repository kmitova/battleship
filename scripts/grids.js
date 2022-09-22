const playerGrid = document.querySelector(".player-grid");
const computerGrid = document.querySelector(".computer-grid");

function generateGrids() {
  // for player grid: id from 1 to 100
  generatePlayerGrid();
  // for computer grid: id from 101 to 200
  generateComputerGrid();
}

function generatePlayerGrid() {
  playerGrid.style.setProperty("--grid-rows", 10);
  playerGrid.style.setProperty("--grid-cols", 10);
  // playerGrid.classList.add("player-grid");
  let i = 1;
  for (let cell = 0; cell < 10 * 10; cell++) {
    let cell = document.createElement("div");
    cell.setAttribute("id", i);
    playerGrid.appendChild(cell).className = "player-grid-item";
    i++;
  }
}

function generateComputerGrid() {
  computerGrid.style.setProperty("--grid-rows", 10);
  computerGrid.style.setProperty("--grid-cols", 10);
  // computerGrid.classList.add("computer-grid");
  let i = 101;
  for (let cell = 0; cell < 10 * 10; cell++) {
    let cell = document.createElement("div");
    cell.setAttribute("id", i);
    computerGrid.appendChild(cell).className = "computer-grid-item";
    i++;
  }
}

export { generateGrids };
