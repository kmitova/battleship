const defaultColor = "white";
let destroyerPlaced = false;
let cruiserPlaced = false;
let submarinePlaced = false;
let battleshipPlaced = false;
let carrierPlaced = false;

function placeShips() {
  destroyerPlacement();
}

function destroyerPlacement() {
  const playerCells = Array.from(
    document.querySelectorAll(".player-grid-item")
  );
  playerCells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      let currentId = cell.id;
      // console.log(cell.id);
      let nextId;
      if (currentId % 10 === 0) {
        nextId = Number(currentId) - 1;
      } else {
        nextId = Number(currentId) + 1;
      }
      // console.log(nextId);
      let nextEl = document.getElementById(nextId);
      // console.log(nextEl);
      if (
        !cell.classList.contains("filled") &&
        !nextEl.classList.contains("filled") &&
        !destroyerPlaced
      ) {
        // cell.style.backgroundColor = "red";
        // nextEl.style.backgroundColor = "red";
        cell.classList.add("filled");
        nextEl.classList.add("filled");
        destroyerPlaced = true;
        cruiserPlacement();
      }

      // LATER ENABLE WITH A FOR EACH LOOP FOR EACH CELL ELEMENT
      cell.disabled = true;
      nextEl.disabled = true;
      // e.preventDefault();
      // nextEl.preventDefault();
    });
  });
}

// CRUISER 3 FIELDS
function cruiserPlacement() {
  const playerCells = Array.from(
    document.querySelectorAll(".player-grid-item")
  );
  playerCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      let currentId = cell.id;
      // console.log(cell.id);
      let nextId;
      let nextId2;
      if (currentId % 10 === 0 || currentId % 10 === 9) {
        nextId = Number(currentId) - 1;
        nextId2 = Number(currentId) - 2;
      } else {
        nextId = Number(currentId) + 1;
        nextId2 = Number(currentId) + 2;
      }
      // console.log(nextId);
      let nextEl = document.getElementById(nextId);
      // console.log(nextEl);

      let nextEl2 = document.getElementById(nextId2);
      // console.log(nextId2);
      if (
        !cell.classList.contains("filled") &&
        !nextEl.classList.contains("filled") &&
        !nextEl2.classList.contains("filled") &&
        !cruiserPlaced
      ) {
        // cell.style.backgroundColor = "red";
        // nextEl.style.backgroundColor = "red";
        // nextEl2.style.backgroundColor = "red";
        cell.classList.add("filled");
        nextEl.classList.add("filled");
        nextEl2.classList.add("filled");
        cruiserPlaced = true;
        submarinePlacement();
      }

      cell.disabled = true;
      nextEl.disabled = true;
      nextEl2.disabled = true;
    });
  });
}

// SUBMARINE 3 FIELDS
function submarinePlacement() {
  const playerCells = Array.from(
    document.querySelectorAll(".player-grid-item")
  );
  playerCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      let currentId = cell.id;
      // console.log(cell.id);
      let nextId;
      let nextId2;
      if (currentId % 10 === 0 || currentId % 10 === 9) {
        nextId = Number(currentId) - 1;
        nextId2 = Number(currentId) - 2;
      } else {
        nextId = Number(currentId) + 1;
        nextId2 = Number(currentId) + 2;
      }
      // console.log(nextId);
      let nextEl = document.getElementById(nextId);
      // console.log(nextEl);

      let nextEl2 = document.getElementById(nextId2);
      // console.log(nextId2);
      if (
        !cell.classList.contains("filled") &&
        !nextEl.classList.contains("filled") &&
        !nextEl2.classList.contains("filled") &&
        !submarinePlaced
      ) {
        // cell.style.backgroundColor = "red";
        // nextEl.style.backgroundColor = "red";
        // nextEl2.style.backgroundColor = "red";
        cell.classList.add("filled");
        nextEl.classList.add("filled");
        nextEl2.classList.add("filled");
        submarinePlaced = true;
        battleshipPlacement();
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
  const playerCells = Array.from(
    document.querySelectorAll(".player-grid-item")
  );
  playerCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      let currentId = cell.id;
      // console.log("current: " + cell.id);
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
      // console.log(currentId, nextId, nextId2, nextId3);
      let nextEl = document.getElementById(nextId);
      let nextEl2 = document.getElementById(nextId2);
      let nextEl3 = document.getElementById(nextId3);

      if (
        !cell.classList.contains("filled") &&
        !nextEl.classList.contains("filled") &&
        !nextEl2.classList.contains("filled") &&
        !nextEl3.classList.contains("filled") &&
        !battleshipPlaced
      ) {
        // cell.style.backgroundColor = "red";
        // nextEl.style.backgroundColor = "red";
        // nextEl2.style.backgroundColor = "red";
        // nextEl3.style.backgroundColor = "red";

        cell.classList.add("filled");
        nextEl.classList.add("filled");
        nextEl2.classList.add("filled");
        nextEl3.classList.add("filled");
        battleshipPlaced = true;
        carrierPlacement();
      }

      cell.disabled = true;
      nextEl.disabled = true;
      nextEl2.disabled = true;
      nextEl3.disabled = true;
    });
  });
}

// CARRIER  FIELDS 5
function carrierPlacement() {
  const playerCells = Array.from(
    document.querySelectorAll(".player-grid-item")
  );
  playerCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      let currentId = cell.id;
      // console.log("current: " + cell.id);
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
      // console.log(currentId, nextId, nextId2, nextId3, nextId4);
      let nextEl = document.getElementById(nextId);
      let nextEl2 = document.getElementById(nextId2);
      let nextEl3 = document.getElementById(nextId3);
      let nextEl4 = document.getElementById(nextId4);

      if (
        !cell.classList.contains("filled") &&
        !nextEl.classList.contains("filled") &&
        !nextEl2.classList.contains("filled") &&
        !nextEl3.classList.contains("filled") &&
        !nextEl4.classList.contains("filled") &&
        !carrierPlaced
      ) {
        // cell.style.backgroundColor = "red";
        // nextEl.style.backgroundColor = "red";
        // nextEl2.style.backgroundColor = "red";
        // nextEl3.style.backgroundColor = "red";
        // nextEl4.style.backgroundColor = "red";

        cell.classList.add("filled");
        nextEl.classList.add("filled");
        nextEl2.classList.add("filled");
        nextEl3.classList.add("filled");
        nextEl4.classList.add("filled");
        carrierPlaced = true;
        computerShipsPlacement();
      }
      cell.disabled = true;
      nextEl.disabled = true;
      nextEl2.disabled = true;
      nextEl3.disabled = true;
      nextEl4.disabled = true;
    });
  });
}
function computerShipsPlacement() {
  const computerCells = Array.from(
    document.querySelectorAll(".computer-grid-item")
  );
  // document.querySelector(".computer-grid-container").style.display = "block";
  computerDestroyerPlacement();
  // computerCruiserPlacement();
  // computerSubmarinePlacement();
  // computerBattleshipPlacement();
  // computerCarrierPlacement();
}
// console.log(computerCells);

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
    // console.log(selectedCellId);
    let cell = document.getElementById(selectedCellId);
    // console.log(cell);

    let nextId;
    if (selectedCellId % 10 === 0) {
      nextId = Number(selectedCellId) - 1;
    } else {
      nextId = Number(selectedCellId) + 1;
    }
    // console.log(nextId);
    let nextEl = document.getElementById(nextId);
    // console.log(nextEl);
    if (
      !cell.classList.contains("filled") &&
      !nextEl.classList.contains("filled")
    ) {
      cell.style.backgroundColor = "red";
      nextEl.style.backgroundColor = "red";
      cell.classList.add("filled");
      nextEl.classList.add("filled");
      shipPlaced = true;
      computerCruiserPlacement();
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
    // console.log(selectedCellId);
    let cell = document.getElementById(selectedCellId);
    // console.log(cell);

    let nextId;
    let nextId2;
    if (selectedCellId % 10 === 0 || selectedCellId % 10 === 9) {
      nextId = Number(selectedCellId) - 1;
      nextId2 = Number(selectedCellId) - 2;
    } else {
      nextId = Number(selectedCellId) + 1;
      nextId2 = Number(selectedCellId) + 2;
    }
    // console.log(nextId);
    let nextEl = document.getElementById(nextId);
    // console.log(nextEl);

    let nextEl2 = document.getElementById(nextId2);
    // console.log(nextId2);
    if (
      !cell.classList.contains("filled") &&
      !nextEl.classList.contains("filled") &&
      !nextEl2.classList.contains("filled")
    ) {
      cell.style.backgroundColor = "red";
      nextEl.style.backgroundColor = "red";
      nextEl2.style.backgroundColor = "red";

      cell.classList.add("filled");
      nextEl.classList.add("filled");
      nextEl2.classList.add("filled");

      shipPlaced = true;
      computerSubmarinePlacement();
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
    // console.log(selectedCellId);
    let cell = document.getElementById(selectedCellId);
    // console.log(cell);

    let nextId;
    let nextId2;
    if (selectedCellId % 10 === 0 || selectedCellId % 10 === 9) {
      nextId = Number(selectedCellId) - 1;
      nextId2 = Number(selectedCellId) - 2;
    } else {
      nextId = Number(selectedCellId) + 1;
      nextId2 = Number(selectedCellId) + 2;
    }
    // console.log(nextId);
    let nextEl = document.getElementById(nextId);
    // console.log(nextEl);

    let nextEl2 = document.getElementById(nextId2);
    // console.log(nextId2);
    if (
      !cell.classList.contains("filled") &&
      !nextEl.classList.contains("filled") &&
      !nextEl2.classList.contains("filled")
    ) {
      cell.style.backgroundColor = "red";
      nextEl.style.backgroundColor = "red";
      nextEl2.style.backgroundColor = "red";

      cell.classList.add("filled");
      nextEl.classList.add("filled");
      nextEl2.classList.add("filled");

      shipPlaced = true;
      computerBattleshipPlacement();
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
    // console.log(selectedCellId);
    let cell = document.getElementById(selectedCellId);
    // console.log(cell);

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
    // console.log(nextId);
    let nextEl = document.getElementById(nextId);
    // console.log(nextEl);

    let nextEl2 = document.getElementById(nextId2);
    let nextEl3 = document.getElementById(nextId3);
    // console.log(nextId2);
    if (
      !cell.classList.contains("filled") &&
      !nextEl.classList.contains("filled") &&
      !nextEl2.classList.contains("filled") &&
      !nextEl3.classList.contains("filled")
    ) {
      cell.style.backgroundColor = "red";
      nextEl.style.backgroundColor = "red";
      nextEl2.style.backgroundColor = "red";
      nextEl3.style.backgroundColor = "red";

      cell.classList.add("filled");
      nextEl.classList.add("filled");
      nextEl2.classList.add("filled");
      nextEl3.classList.add("filled");
      computerCarrierPlacement();

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
    // console.log(selectedCellId);
    let cell = document.getElementById(selectedCellId);
    // console.log(cell);

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
    // console.log(nextId);
    let nextEl = document.getElementById(nextId);
    // console.log(nextEl);

    let nextEl2 = document.getElementById(nextId2);
    let nextEl3 = document.getElementById(nextId3);
    let nextEl4 = document.getElementById(nextId4);
    // console.log(nextId2);
    if (
      !cell.classList.contains("filled") &&
      !nextEl.classList.contains("filled") &&
      !nextEl2.classList.contains("filled") &&
      !nextEl3.classList.contains("filled") &&
      !nextEl4.classList.contains("filled")
    ) {
      cell.style.backgroundColor = "red";
      nextEl.style.backgroundColor = "red";
      nextEl2.style.backgroundColor = "red";
      nextEl3.style.backgroundColor = "red";
      nextEl4.style.backgroundColor = "red";

      cell.classList.add("filled");
      nextEl.classList.add("filled");
      nextEl2.classList.add("filled");
      nextEl3.classList.add("filled");
      nextEl4.classList.add("filled");

      shipPlaced = true;
      document.querySelector(".computer-grid-container").style.display =
        "block";
    }

    // cell.disabled = true;
    // nextEl.disabled = true;
    // nextEl2.disabled = true;
  }
}

export { placeShips, getRandomIntInclusive };
