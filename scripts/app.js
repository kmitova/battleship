const playerGrid = document.querySelector(".player-grid");
const computerGrid = document.querySelector(".computer-grid");
const defaultColor = "white";

// VARIABLE TO CHECK IF THE GAME HAS STARTED (IF TRUE, CLICK EVENTS WILL BE DISABLED TO NOT ADD A SHIP WHERE THERE ALREADY IS ONE)
let gameHasStarted = false;

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

function destroyerPlacement() {
  playerCells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
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
      console.log(nextEl);
      if (
        cell.style.backgroundColor !== "red" &&
        nextEl.style.backgroundColor !== "red"
      ) {
        cell.style.backgroundColor = "red";
        nextEl.style.backgroundColor = "red";
      }

      // LATER ENABLE WITH A FOR EACH LOOP FOR EACH CELL ELEMENT
      cell.disabled = true;
      nextEl.disabled = true;
      // e.preventDefault();
      // nextEl.preventDefault();
    });
  });
}

// destroyerPlacement();

// CRUISER 3 FIELDS
function cruiserPlacement() {
  playerCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      let currentId = cell.id;
      console.log(cell.id);
      let nextId;
      let nextId2;
      if (currentId % 10 === 0 || currentId % 10 === 9) {
        nextId = Number(currentId) - 1;
        nextId2 = Number(currentId) - 2;
      } else {
        nextId = Number(currentId) + 1;
        nextId2 = Number(currentId) + 2;
      }
      console.log(nextId);
      let nextEl = document.getElementById(nextId);
      // console.log(nextEl);

      let nextEl2 = document.getElementById(nextId2);
      console.log(nextId2);
      if (
        cell.style.backgroundColor != "red" &&
        nextEl.style.backgroundColor != "red" &&
        nextEl2.style.backgroundColor != "red"
      ) {
        cell.style.backgroundColor = "red";
        nextEl.style.backgroundColor = "red";
        nextEl2.style.backgroundColor = "red";
      }

      cell.disabled = true;
      nextEl.disabled = true;
      nextEl2.disabled = true;
    });
  });
}
// cruiserPlacement();

// SUBMARINE 3 FIELDS
function submarinePlacement() {
  playerCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      let currentId = cell.id;
      console.log(cell.id);
      let nextId;
      let nextId2;
      if (currentId % 10 === 0 || currentId % 10 === 9) {
        nextId = Number(currentId) - 1;
        nextId2 = Number(currentId) - 2;
      } else {
        nextId = Number(currentId) + 1;
        nextId2 = Number(currentId) + 2;
      }
      console.log(nextId);
      let nextEl = document.getElementById(nextId);
      // console.log(nextEl);

      let nextEl2 = document.getElementById(nextId2);
      console.log(nextId2);
      if (
        cell.style.backgroundColor != "red" &&
        nextEl.style.backgroundColor != "red" &&
        nextEl2.style.backgroundColor != "red"
      ) {
        cell.style.backgroundColor = "red";
        nextEl.style.backgroundColor = "red";
        nextEl2.style.backgroundColor = "red";
      }

      cell.disabled = true;
      nextEl.disabled = true;
      nextEl2.disabled = true;
    });
  });
}
// submarinePlacement();

// BATTLESHIP 4 FIELDS
function battleshipPlacement() {
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

      if (
        cell.style.backgroundColor != "red" &&
        nextEl.style.backgroundColor != "red" &&
        nextEl2.style.backgroundColor != "red" &&
        nextEl3.style.backgroundColor != "red"
      ) {
        cell.style.backgroundColor = "red";
        nextEl.style.backgroundColor = "red";
        nextEl2.style.backgroundColor = "red";
        nextEl3.style.backgroundColor = "red";
      }

      cell.disabled = true;
      nextEl.disabled = true;
      nextEl2.disabled = true;
      nextEl3.disabled = true;
    });
  });
}

// battleshipPlacement();

// CARRIER  FIELDS 5
function carrierPlacement() {
  playerCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      let currentId = cell.id;
      console.log("current: " + cell.id);
      let nextId;
      let nextId2;
      let nextId3;
      let nextId4;
      if (currentId % 10 === 0) {
        nextId = currentId - 1;
        nextId2 = currentId - 2;
        nextId3 = currentId - 3;
        nextId4 = currentId - 4;
      } else if (currentId % 10 === 9) {
        nextId = currentId - 1;
        nextId2 = currentId - 2;
        nextId3 = currentId - 3;
        nextId4 = currentId - 4;
      } else if (currentId % 10 === 8) {
        nextId = currentId - 1;
        nextId2 = currentId - 2;
        nextId3 = currentId - 3;
        nextId4 = currentId - 4;
      } else if (currentId % 10 === 7) {
        nextId = currentId - 1;
        nextId2 = currentId - 2;
        nextId3 = currentId - 3;
        nextId4 = currentId - 4;
      } else {
        nextId = Number(currentId) + 1;
        nextId2 = Number(currentId) + 2;
        nextId3 = Number(currentId) + 3;
        nextId4 = Number(currentId) + 4;
      }
      console.log(currentId, nextId, nextId2, nextId3, nextId4);
      let nextEl = document.getElementById(nextId);
      let nextEl2 = document.getElementById(nextId2);
      let nextEl3 = document.getElementById(nextId3);
      let nextEl4 = document.getElementById(nextId4);

      if (
        cell.style.backgroundColor != "red" &&
        nextEl.style.backgroundColor != "red" &&
        nextEl2.style.backgroundColor != "red" &&
        nextEl3.style.backgroundColor != "red" &&
        nextEl4.style.backgroundColor != "red"
      ) {
        cell.style.backgroundColor = "red";
        nextEl.style.backgroundColor = "red";
        nextEl2.style.backgroundColor = "red";
        nextEl3.style.backgroundColor = "red";
        nextEl4.style.backgroundColor = "red";
      }
      cell.disabled = true;
      nextEl.disabled = true;
      nextEl2.disabled = true;
      nextEl3.disabled = true;
      nextEl4.disabled = true;
    });
  });
}

// carrierPlacement();

// 0. get array of computer cells
const computerCells = Array.from(
  document.querySelectorAll(".computer-grid-item")
);
console.log(computerCells);

// 1. get random number for cell for computer and change class name of clicked cell and (for now) add color which will be removed for the game

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function computerDestroyerPlacement() {
  let shipPlaced = false;
  while (!shipPlaced) {
    let selectedCellId = getRandomIntInclusive(101, 200);
    console.log(selectedCellId);
    let cell = document.getElementById(selectedCellId);
    console.log(cell);

    // cell.addEventListener("click", () => {
    // let currentId = cell.id;
    // console.log(cell.id);

    let nextId;
    if (selectedCellId % 10 === 0) {
      nextId = Number(selectedCellId) - 1;
    } else {
      nextId = Number(selectedCellId) + 1;
    }
    console.log(nextId);
    let nextEl = document.getElementById(nextId);
    console.log(nextEl);
    if (
      cell.style.backgroundColor !== "red" &&
      nextEl.style.backgroundColor !== "red"
    ) {
      cell.style.backgroundColor = "red";
      nextEl.style.backgroundColor = "red";
      shipPlaced = true;
    }

    // LATER ENABLE WITH A FOR EACH LOOP FOR EACH CELL ELEMENT
    // cell.disabled = true;
    // nextEl.disabled = true;
  }
}
function computerCruiserPlacement() {
  let shipPlaced = false;
  while (!shipPlaced) {
    let selectedCellId = getRandomIntInclusive(101, 200);
    console.log(selectedCellId);
    let cell = document.getElementById(selectedCellId);
    console.log(cell);

    let nextId;
    let nextId2;
    if (selectedCellId % 10 === 0 || selectedCellId % 10 === 9) {
      nextId = Number(selectedCellId) - 1;
      nextId2 = Number(selectedCellId) - 2;
    } else {
      nextId = Number(selectedCellId) + 1;
      nextId2 = Number(selectedCellId) + 2;
    }
    console.log(nextId);
    let nextEl = document.getElementById(nextId);
    // console.log(nextEl);

    let nextEl2 = document.getElementById(nextId2);
    console.log(nextId2);
    if (
      cell.style.backgroundColor != "red" &&
      nextEl.style.backgroundColor != "red" &&
      nextEl2.style.backgroundColor != "red"
    ) {
      cell.style.backgroundColor = "red";
      nextEl.style.backgroundColor = "red";
      nextEl2.style.backgroundColor = "red";
      shipPlaced = true;
    }

    // cell.disabled = true;
    // nextEl.disabled = true;
    // nextEl2.disabled = true;
  }
}

function computerSubmarinePlacement() {
  let shipPlaced = false;
  while (!shipPlaced) {
    let selectedCellId = getRandomIntInclusive(101, 200);
    console.log(selectedCellId);
    let cell = document.getElementById(selectedCellId);
    console.log(cell);

    let nextId;
    let nextId2;
    if (selectedCellId % 10 === 0 || selectedCellId % 10 === 9) {
      nextId = Number(selectedCellId) - 1;
      nextId2 = Number(selectedCellId) - 2;
    } else {
      nextId = Number(selectedCellId) + 1;
      nextId2 = Number(selectedCellId) + 2;
    }
    console.log(nextId);
    let nextEl = document.getElementById(nextId);
    // console.log(nextEl);

    let nextEl2 = document.getElementById(nextId2);
    console.log(nextId2);
    if (
      cell.style.backgroundColor != "red" &&
      nextEl.style.backgroundColor != "red" &&
      nextEl2.style.backgroundColor != "red"
    ) {
      cell.style.backgroundColor = "red";
      nextEl.style.backgroundColor = "red";
      nextEl2.style.backgroundColor = "red";
      shipPlaced = true;
    }

    // cell.disabled = true;
    // nextEl.disabled = true;
    // nextEl2.disabled = true;
  }
}

function computerBattleshipPlacement() {
  let shipPlaced = false;
  while (!shipPlaced) {
    let selectedCellId = getRandomIntInclusive(101, 200);
    console.log(selectedCellId);
    let cell = document.getElementById(selectedCellId);
    console.log(cell);

    let nextId;
    let nextId2;
    let nextId3;
    if (
      selectedCellId % 10 === 0 ||
      selectedCellId % 10 === 9 ||
      selectedCellId % 10 == 8
    ) {
      nextId = Number(selectedCellId) - 1;
      nextId2 = Number(selectedCellId) - 2;
      nextId3 = Number(selectedCellId) - 3;
    } else {
      nextId = Number(selectedCellId) + 1;
      nextId2 = Number(selectedCellId) + 2;
      nextId3 = Number(selectedCellId) + 3;
    }
    console.log(nextId);
    let nextEl = document.getElementById(nextId);
    // console.log(nextEl);

    let nextEl2 = document.getElementById(nextId2);
    let nextEl3 = document.getElementById(nextId3);
    console.log(nextId2);
    if (
      cell.style.backgroundColor != "red" &&
      nextEl.style.backgroundColor != "red" &&
      nextEl2.style.backgroundColor != "red" &&
      nextEl3.style.backgroundColor != "red"
    ) {
      cell.style.backgroundColor = "red";
      nextEl.style.backgroundColor = "red";
      nextEl2.style.backgroundColor = "red";
      nextEl3.style.backgroundColor = "red";
      shipPlaced = true;
    }

    // cell.disabled = true;
    // nextEl.disabled = true;
    // nextEl2.disabled = true;
  }
}

function computerCarrierPlacement() {
  let shipPlaced = false;
  while (!shipPlaced) {
    let selectedCellId = getRandomIntInclusive(101, 200);
    console.log(selectedCellId);
    let cell = document.getElementById(selectedCellId);
    console.log(cell);

    let nextId;
    let nextId2;
    let nextId3;
    let nextId4;
    if (
      selectedCellId % 10 === 0 ||
      selectedCellId % 10 === 9 ||
      selectedCellId % 10 == 8 ||
      selectedCellId % 10 == 7
    ) {
      nextId = Number(selectedCellId) - 1;
      nextId2 = Number(selectedCellId) - 2;
      nextId3 = Number(selectedCellId) - 3;
      nextId4 = Number(selectedCellId) - 4;
    } else {
      nextId = Number(selectedCellId) + 1;
      nextId2 = Number(selectedCellId) + 2;
      nextId3 = Number(selectedCellId) + 3;
      nextId4 = Number(selectedCellId) + 4;
    }
    console.log(nextId);
    let nextEl = document.getElementById(nextId);
    // console.log(nextEl);

    let nextEl2 = document.getElementById(nextId2);
    let nextEl3 = document.getElementById(nextId3);
    let nextEl4 = document.getElementById(nextId4);
    console.log(nextId2);
    if (
      cell.style.backgroundColor != "red" &&
      nextEl.style.backgroundColor != "red" &&
      nextEl2.style.backgroundColor != "red" &&
      nextEl3.style.backgroundColor != "red" &&
      nextEl4.style.backgroundColor != "red"
    ) {
      cell.style.backgroundColor = "red";
      nextEl.style.backgroundColor = "red";
      nextEl2.style.backgroundColor = "red";
      nextEl3.style.backgroundColor = "red";
      nextEl4.style.backgroundColor = "red";
      shipPlaced = true;
    }

    // cell.disabled = true;
    // nextEl.disabled = true;
    // nextEl2.disabled = true;
  }
}
computerCarrierPlacement();
computerSubmarinePlacement();
computerCruiserPlacement();
computerDestroyerPlacement();
computerBattleshipPlacement();

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
