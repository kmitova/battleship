const playerGrid = document.querySelector(".player-grid");
const computerGrid = document.querySelector(".computer-grid");

function generatePlayerGrid() {
  playerGrid.style.setProperty("--grid-rows", 10);
  playerGrid.style.setProperty("--grid-cols", 10);
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
  let i = 101;
  for (let cell = 0; cell < 10 * 10; cell++) {
    let cell = document.createElement("div");
    cell.setAttribute("id", i);
    computerGrid.appendChild(cell).className = "computer-grid-item";
    i++;
  }
}
// for player grid: id from 1 to 100
generatePlayerGrid();
// for computer grid: id from 101 to 200
generateComputerGrid();

const playerCells = Array.from(document.querySelectorAll(".player-grid-item"));

// DESTROYER 2 FIELDS
// playerCells.forEach((cell) => {
//   cell.addEventListener("click", () => {
//     let currentId = cell.id;
//     console.log(cell.id);
//     let nextId;
//     if (currentId % 10 === 0) {
//       nextId = Number(currentId) - 1;
//     } else {
//       nextId = Number(currentId) + 1;
//     }
//     console.log(nextId);
//     let nextEl = document.getElementById(nextId);
//     console.log(nextEl);
//     cell.style.backgroundColor = "red";
//     nextEl.style.backgroundColor = "red";
//   });
// });

// CRUISER 3 FIELDS
playerCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    let currentId = cell.id;
    console.log(cell.id);
    let nextId;
    if (currentId % 10 === 0) {
      nextId = Number(currentId) - 1;
    } else {
      nextId = Number(currentId) + 1;
    }
    console.log(nextId);
    let nextEl = document.getElementById(nextId);
    // console.log(nextEl);
    cell.style.backgroundColor = "red";
    nextEl.style.backgroundColor = "red";

    let nextId2;
    if (currentId % 10 === 0) {
      nextId2 = Number(nextId) - 1;
    } else {
      nextId2 = Number(nextId) + 1;
    }
    let nextEl2 = document.getElementById(nextId2);
    console.log(nextId2);
    nextEl2.style.backgroundColor = "red";
  });
});

// playerCells.forEach((cell) => {
//   cell.addEventListener("mouseover", (e) => {
//     cell.style.backgroundColor = "blue";
//     console.log("on cell");
//   });

//   cell.addEventListener("click", () => {
//     cell.style.backgroundColor = "red";
//   });
//   // TO MAKE THE RED STAY: MAYBE DISABLE EVENTS UNTIL THE COMPUTER HAS PLAYED
//   // cell.addEventListener("mouseout", (e) => {
//   //   cell.style.backgroundColor = "white";
//   //   console.log("out of cell");
//   // });
// });
