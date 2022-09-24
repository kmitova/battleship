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
      let nextId;
      if (currentId % 10 === 0) {
        nextId = Number(currentId) - 1;
      } else {
        nextId = Number(currentId) + 1;
      }
      let nextEl = document.getElementById(nextId);
      if (
        !cell.classList.contains("filled") &&
        !nextEl.classList.contains("filled") &&
        !destroyerPlaced
      ) {
        cell.classList.add("filled");
        nextEl.classList.add("filled");
        destroyerPlaced = true;
        cruiserPlacement();
      }
      cell.disabled = true;
      nextEl.disabled = true;
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
      let nextId;
      let nextId2;
      if (currentId % 10 === 0 || currentId % 10 === 9) {
        nextId = Number(currentId) - 1;
        nextId2 = Number(currentId) - 2;
      } else {
        nextId = Number(currentId) + 1;
        nextId2 = Number(currentId) + 2;
      }
      let nextEl = document.getElementById(nextId);
      let nextEl2 = document.getElementById(nextId2);
      if (
        !cell.classList.contains("filled") &&
        !nextEl.classList.contains("filled") &&
        !nextEl2.classList.contains("filled") &&
        !cruiserPlaced
      ) {
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
      let nextId;
      let nextId2;
      if (currentId % 10 === 0 || currentId % 10 === 9) {
        nextId = Number(currentId) - 1;
        nextId2 = Number(currentId) - 2;
      } else {
        nextId = Number(currentId) + 1;
        nextId2 = Number(currentId) + 2;
      }
      let nextEl = document.getElementById(nextId);
      let nextEl2 = document.getElementById(nextId2);
      if (
        !cell.classList.contains("filled") &&
        !nextEl.classList.contains("filled") &&
        !nextEl2.classList.contains("filled") &&
        !submarinePlaced
      ) {
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

// BATTLESHIP 4 FIELDS
function battleshipPlacement() {
  const playerCells = Array.from(
    document.querySelectorAll(".player-grid-item")
  );
  playerCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      let currentId = cell.id;
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
  computerDestroyerPlacement();
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerDestroyerPlacement() {
  let shipPlaced = false;
  while (!shipPlaced) {
    let selectedCellId = getRandomIntInclusive(101, 200);
    let cell = document.getElementById(selectedCellId);
    let nextId;
    if (selectedCellId % 10 === 0) {
      nextId = Number(selectedCellId) - 1;
    } else {
      nextId = Number(selectedCellId) + 1;
    }
    let nextEl = document.getElementById(nextId);
    if (
      !cell.classList.contains("filledC") &&
      !nextEl.classList.contains("filledC")
    ) {
      cell.classList.add("filledC");
      nextEl.classList.add("filledC");
      shipPlaced = true;
      computerCruiserPlacement();
    }
  }
}

function computerCruiserPlacement() {
  let shipPlaced = false;
  while (!shipPlaced) {
    let selectedCellId = getRandomIntInclusive(101, 200);
    let cell = document.getElementById(selectedCellId);
    let nextId;
    let nextId2;
    if (selectedCellId % 10 === 0 || selectedCellId % 10 === 9) {
      nextId = Number(selectedCellId) - 1;
      nextId2 = Number(selectedCellId) - 2;
    } else {
      nextId = Number(selectedCellId) + 1;
      nextId2 = Number(selectedCellId) + 2;
    }
    let nextEl = document.getElementById(nextId);
    let nextEl2 = document.getElementById(nextId2);
    if (
      !cell.classList.contains("filledC") &&
      !nextEl.classList.contains("filledC") &&
      !nextEl2.classList.contains("filledC")
    ) {
      cell.classList.add("filledC");
      nextEl.classList.add("filledC");
      nextEl2.classList.add("filledC");

      shipPlaced = true;
      computerSubmarinePlacement();
    }
  }
}

function computerSubmarinePlacement() {
  let shipPlaced = false;
  while (!shipPlaced) {
    let selectedCellId = getRandomIntInclusive(101, 200);
    let cell = document.getElementById(selectedCellId);
    let nextId;
    let nextId2;
    if (selectedCellId % 10 === 0 || selectedCellId % 10 === 9) {
      nextId = Number(selectedCellId) - 1;
      nextId2 = Number(selectedCellId) - 2;
    } else {
      nextId = Number(selectedCellId) + 1;
      nextId2 = Number(selectedCellId) + 2;
    }
    let nextEl = document.getElementById(nextId);
    let nextEl2 = document.getElementById(nextId2);
    if (
      !cell.classList.contains("filledC") &&
      !nextEl.classList.contains("filledC") &&
      !nextEl2.classList.contains("filledC")
    ) {
      cell.classList.add("filledC");
      nextEl.classList.add("filledC");
      nextEl2.classList.add("filledC");

      shipPlaced = true;
      computerBattleshipPlacement();
    }
  }
}

function computerBattleshipPlacement() {
  let shipPlaced = false;
  while (!shipPlaced) {
    let selectedCellId = getRandomIntInclusive(101, 200);
    let cell = document.getElementById(selectedCellId);
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

    let nextEl = document.getElementById(nextId);
    let nextEl2 = document.getElementById(nextId2);
    let nextEl3 = document.getElementById(nextId3);

    if (
      !cell.classList.contains("filledC") &&
      !nextEl.classList.contains("filledC") &&
      !nextEl2.classList.contains("filledC") &&
      !nextEl3.classList.contains("filledC")
    ) {
      cell.classList.add("filledC");
      nextEl.classList.add("filledC");
      nextEl2.classList.add("filledC");
      nextEl3.classList.add("filledC");
      computerCarrierPlacement();

      shipPlaced = true;
    }
  }
}

function computerCarrierPlacement() {
  let shipPlaced = false;
  while (!shipPlaced) {
    let selectedCellId = getRandomIntInclusive(101, 200);
    let cell = document.getElementById(selectedCellId);

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
    let nextEl = document.getElementById(nextId);

    let nextEl2 = document.getElementById(nextId2);
    let nextEl3 = document.getElementById(nextId3);
    let nextEl4 = document.getElementById(nextId4);
    if (
      !cell.classList.contains("filledC") &&
      !nextEl.classList.contains("filledC") &&
      !nextEl2.classList.contains("filledC") &&
      !nextEl3.classList.contains("filledC") &&
      !nextEl4.classList.contains("filledC")
    ) {
      cell.classList.add("filledC");
      nextEl.classList.add("filledC");
      nextEl2.classList.add("filledC");
      nextEl3.classList.add("filledC");
      nextEl4.classList.add("filledC");

      shipPlaced = true;
      document.querySelector(".computer-grid-container").style.display =
        "block";
    }
  }
}

export { placeShips, getRandomIntInclusive };
