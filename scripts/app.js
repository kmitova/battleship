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
//     // console.log(nextEl);
//     cell.style.backgroundColor = "red";
//     nextEl.style.backgroundColor = "red";

//     let nextId2;
//     if (nextId % 10 === 0) {
//       nextId2 = Number(nextId) - 2;
//     } else {
//       nextId2 = Number(nextId) + 1;
//     }
//     let nextEl2 = document.getElementById(nextId2);
//     console.log(nextId2);
//     nextEl2.style.backgroundColor = "red";
//   });
// });

// SUBMARINE 3 FIELDS
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
//     // console.log(nextEl);
//     cell.style.backgroundColor = "red";
//     nextEl.style.backgroundColor = "red";

//     let nextId2;
//     if (nextId % 10 === 0) {
//       nextId2 = Number(nextId) - 2;
//     } else {
//       nextId2 = Number(nextId) + 1;
//     }
//     let nextEl2 = document.getElementById(nextId2);
//     console.log(nextId2);
//     nextEl2.style.backgroundColor = "red";
//   });
// });

// BATTLESHIP 4 FIELDS
playerCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    let currentId = cell.id;
    console.log("current: " + cell.id);
    let nextId;
    let nextId2;
    let nextId3;
    if (currentId % 10 === 0) {
      nextId = currentId - 1;
      nextId2 = currentId - 2;
      nextId3 = currentId - 3;
    } else if (currentId % 10 === 9) {
      nextId = currentId - 1;
      nextId2 = currentId - 2;
      nextId3 = currentId - 3;
    } else if (currentId % 10 === 8) {
      nextId = currentId - 1;
      nextId2 = currentId - 2;
      nextId3 = currentId - 3;
    } else {
      nextId = Number(currentId) + 1;
      nextId2 = Number(currentId) + 2;
      nextId3 = Number(currentId) + 3;
    }
    console.log(currentId, nextId, nextId2, nextId3);
    let nextEl = document.getElementById(nextId);
    let nextEl2 = document.getElementById(nextId2);
    let nextEl3 = document.getElementById(nextId3);

    cell.style.backgroundColor = "red";
    nextEl.style.backgroundColor = "red";
    nextEl2.style.backgroundColor = "red";
    nextEl3.style.backgroundColor = "red";
  });
});

// CARRIER  FIELDS 5
// playerCells.forEach((cell) => {
//   cell.addEventListener("click", () => {
//     let currentId = cell.id;
//     console.log("current: " + cell.id);
//     let nextId;
//     let nextId2;
//     let nextId3;
//     let nextId4;
//     if (currentId % 10 === 0) {
//       nextId = currentId - 1;
//       nextId2 = currentId - 2;
//       nextId3 = currentId - 3;
//       nextId4 = currentId - 4;
//     } else if (currentId % 10 === 9) {
//       nextId = currentId - 1;
//       nextId2 = currentId - 2;
//       nextId3 = currentId - 3;
//       nextId4 = currentId - 4;
//     } else if (currentId % 10 === 8) {
//       nextId = currentId - 1;
//       nextId2 = currentId - 2;
//       nextId3 = currentId - 3;
//       nextId4 = currentId - 4;
//     } else if (currentId % 10 === 7) {
//       nextId = currentId - 1;
//       nextId2 = currentId - 2;
//       nextId3 = currentId - 3;
//       nextId4 = currentId - 4;
//     } else {
//       nextId = Number(currentId) + 1;
//       nextId2 = Number(currentId) + 2;
//       nextId3 = Number(currentId) + 3;
//       nextId4 = Number(currentId) + 4;
//     }
//     console.log(currentId, nextId, nextId2, nextId3, nextId4);
//     let nextEl = document.getElementById(nextId);
//     let nextEl2 = document.getElementById(nextId2);
//     let nextEl3 = document.getElementById(nextId3);
//     let nextEl4 = document.getElementById(nextId4);

//     cell.style.backgroundColor = "red";
//     nextEl.style.backgroundColor = "red";
//     nextEl2.style.backgroundColor = "red";
//     nextEl3.style.backgroundColor = "red";
//     nextEl4.style.backgroundColor = "red";
//   });
// });

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
