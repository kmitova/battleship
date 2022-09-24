import { generateGrids } from "./grids.js";
import { placeShips } from "./playerShips.js";
import { attack } from "./attackFunctions.js";

// const playerGrid = document.querySelector(".player-grid");
// const computerGrid = document.querySelector(".computer-grid");
// const defaultColor = "white";
// let destroyerPlaced = false;
// let cruiserPlaced = false;
// let submarinePlaced = false;
// let battleshipPlaced = false;
// let carrierPlaced = false;
// let shipsPlaced = false;
// let gameOver = false;
// let computerWins = false;
// let playerWins = false;
// let playerTurn = true;
// let computerTurn = false;
// let playerShips = 16;
// let computerShips = 16;

let gameHasStarted = false;

const playerName = document.getElementById("name");

const startBtn = document.getElementById("name-btn");
let btnClicked = false;
startBtn.addEventListener("click", () => {
  // btnClicked = true;
  // gameHasStarted = true;
  playGame();
  attack();
});

function playGame() {
  // if (gameHasStarted) {
  //   console.log(playerName.value);
  generateGrids();
  // const playerCells = Array.from(
  //   document.querySelectorAll(".player-grid-item")
  // );
  // console.log(playerGrid.classList);
  // playerGrid.style.display = "block";
  document.querySelector(".player-grid-container").style.display = "block";
  placeShips();
  // computerShipsPlacement();
  // document.querySelector(".computer-grid-container").style.display = "block";
  // shipsPlaced = true;
  // if (shipsPlaced) {
  //   console.log("ships were placed");
  // const computerCells = Array.from(
  //   document.querySelectorAll(".computer-grid-item")
  // );
  // while (gameOver == false) {
  //   if (playerShips <= 0) {
  //     gameOver = true;
  //     computerWins = true;
  //   }
  //   if (computerShips <= 0) {
  //     gameOver = true;
  //     playerWins = true;
  //   } else {
  //     attack();
  //   }
  // }
  // }
  // }
}
// function attack() {
//   const computerCells = Array.from(
//     document.querySelectorAll(".computer-grid-item")
//   );
//   computerCells.forEach((cell) => {
//     cell.addEventListener("click", () => {
//       if (!gameOver) {
//         console.log(playerShips);
//         console.log(computerShips);
//         if (playerShips <= 0) {
//           gameOver = true;
//           computerWins = true;
//         }
//         if (computerShips <= 0) {
//           gameOver = true;
//           playerWins = true;
//         }
//         if (playerTurn) {
//           playerAttack(cell);
//           playerTurn = false;
//           computerTurn = true;
//         }
//         if (computerTurn) {
//           let hasAttacked = false;
//           computerAttack();
//           playerTurn = true;
//           computerTurn = false;
//         }
//       }
//       if (gameOver) {
//         console.log("game over");
//         if (computerWins) {
//           console.log("computer wins");
//         } else if (playerWins) {
//           console.log("player wins");
//         }
//       }
//     });
//   });
// }

// function playerAttack(cell) {
//   if (cell.classList.contains("filledC")) {
//     computerShips--;
//     cell.classList.remove("filledC");
//     cell.classList.add("hit");
//   } else {
//     cell.classList.add("missed");
//   }
// }

// function computerAttack() {
//   let hasAttacked = false;
//   const cellId = getRandomIntInclusive(1, 100);
//   console.log("cell id" + cellId);
//   const cell = document.getElementById(Number(cellId));
//   if (cell.classList.contains("filled")) {
//     playerShips--;
//     cell.classList.remove("filled");
//     cell.classList.add("hit");
//   } else {
//     cell.classList.add("missed");
//   }
//   hasAttacked = true;
//   console.log(hasAttacked);
// }

// if gamehasstarted:
// -- display player board
// -- queue the ship placing functions and add classes to the clicked fields
// -- player puts their ships
// -- while NOT displaying the filled cells, show the computer board and randomly fill the ships on it
// then: while alternating turns (player starts) player should click on a cell on the computer board and the computer should click on a cell on the player board. will have two variables: playerShips and computerShips (equal to 17). each time there is a hit, 1 will be subtracted. whoever hits all of the opponents cells and zeroes their ships, wins.

// const playerCells = Array.from(document.querySelectorAll(".player-grid-item"));

// DESTROYER 2 FIELDS

// function destroyerPlacement() {
//   const playerCells = Array.from(
//     document.querySelectorAll(".player-grid-item")
//   );
//   playerCells.forEach((cell) => {
//     cell.addEventListener("click", (e) => {
//       let currentId = cell.id;
//       console.log(cell.id);
//       let nextId;
//       if (currentId % 10 === 0) {
//         nextId = Number(currentId) - 1;
//       } else {
//         nextId = Number(currentId) + 1;
//       }
//       console.log(nextId);
//       let nextEl = document.getElementById(nextId);
//       console.log(nextEl);
//       if (
//         !cell.classList.contains("filled") &&
//         !nextEl.classList.contains("filled") &&
//         !destroyerPlaced
//       ) {
//         cell.style.backgroundColor = "red";
//         nextEl.style.backgroundColor = "red";
//         cell.classList.add("filled");
//         nextEl.classList.add("filled");
//         destroyerPlaced = true;
//         cruiserPlacement();
//       }

//       // LATER ENABLE WITH A FOR EACH LOOP FOR EACH CELL ELEMENT
//       cell.disabled = true;
//       nextEl.disabled = true;
//       // e.preventDefault();
//       // nextEl.preventDefault();
//     });
//   });
// }

// // CRUISER 3 FIELDS
// function cruiserPlacement() {
//   const playerCells = Array.from(
//     document.querySelectorAll(".player-grid-item")
//   );
//   playerCells.forEach((cell) => {
//     cell.addEventListener("click", () => {
//       let currentId = cell.id;
//       console.log(cell.id);
//       let nextId;
//       let nextId2;
//       if (currentId % 10 === 0 || currentId % 10 === 9) {
//         nextId = Number(currentId) - 1;
//         nextId2 = Number(currentId) - 2;
//       } else {
//         nextId = Number(currentId) + 1;
//         nextId2 = Number(currentId) + 2;
//       }
//       console.log(nextId);
//       let nextEl = document.getElementById(nextId);
//       // console.log(nextEl);

//       let nextEl2 = document.getElementById(nextId2);
//       console.log(nextId2);
//       if (
//         !cell.classList.contains("filled") &&
//         !nextEl.classList.contains("filled") &&
//         !nextEl2.classList.contains("filled") &&
//         !cruiserPlaced
//       ) {
//         cell.style.backgroundColor = "red";
//         nextEl.style.backgroundColor = "red";
//         nextEl2.style.backgroundColor = "red";
//         cell.classList.add("filled");
//         nextEl.classList.add("filled");
//         nextEl2.classList.add("filled");
//         cruiserPlaced = true;
//         submarinePlacement();
//       }

//       cell.disabled = true;
//       nextEl.disabled = true;
//       nextEl2.disabled = true;
//     });
//   });
// }

// // SUBMARINE 3 FIELDS
// function submarinePlacement() {
//   const playerCells = Array.from(
//     document.querySelectorAll(".player-grid-item")
//   );
//   playerCells.forEach((cell) => {
//     cell.addEventListener("click", () => {
//       let currentId = cell.id;
//       console.log(cell.id);
//       let nextId;
//       let nextId2;
//       if (currentId % 10 === 0 || currentId % 10 === 9) {
//         nextId = Number(currentId) - 1;
//         nextId2 = Number(currentId) - 2;
//       } else {
//         nextId = Number(currentId) + 1;
//         nextId2 = Number(currentId) + 2;
//       }
//       console.log(nextId);
//       let nextEl = document.getElementById(nextId);
//       // console.log(nextEl);

//       let nextEl2 = document.getElementById(nextId2);
//       console.log(nextId2);
//       if (
//         !cell.classList.contains("filled") &&
//         !nextEl.classList.contains("filled") &&
//         !nextEl2.classList.contains("filled") &&
//         !submarinePlaced
//       ) {
//         cell.style.backgroundColor = "red";
//         nextEl.style.backgroundColor = "red";
//         nextEl2.style.backgroundColor = "red";
//         cell.classList.add("filled");
//         nextEl.classList.add("filled");
//         nextEl2.classList.add("filled");
//         submarinePlaced = true;
//         battleshipPlacement();
//       }

//       cell.disabled = true;
//       nextEl.disabled = true;
//       nextEl2.disabled = true;
//     });
//   });
// }
// // submarinePlacement();

// // BATTLESHIP 4 FIELDS
// function battleshipPlacement() {
//   const playerCells = Array.from(
//     document.querySelectorAll(".player-grid-item")
//   );
//   playerCells.forEach((cell) => {
//     cell.addEventListener("click", () => {
//       let currentId = cell.id;
//       console.log("current: " + cell.id);
//       let nextId;
//       let nextId2;
//       let nextId3;
//       if (currentId % 10 === 0) {
//         nextId = currentId - 1;
//         nextId2 = currentId - 2;
//         nextId3 = currentId - 3;
//       } else if (currentId % 10 === 9) {
//         nextId = currentId - 1;
//         nextId2 = currentId - 2;
//         nextId3 = currentId - 3;
//       } else if (currentId % 10 === 8) {
//         nextId = currentId - 1;
//         nextId2 = currentId - 2;
//         nextId3 = currentId - 3;
//       } else {
//         nextId = Number(currentId) + 1;
//         nextId2 = Number(currentId) + 2;
//         nextId3 = Number(currentId) + 3;
//       }
//       console.log(currentId, nextId, nextId2, nextId3);
//       let nextEl = document.getElementById(nextId);
//       let nextEl2 = document.getElementById(nextId2);
//       let nextEl3 = document.getElementById(nextId3);

//       if (
//         !cell.classList.contains("filled") &&
//         !nextEl.classList.contains("filled") &&
//         !nextEl2.classList.contains("filled") &&
//         !nextEl3.classList.contains("filled") &&
//         !battleshipPlaced
//       ) {
//         cell.style.backgroundColor = "red";
//         nextEl.style.backgroundColor = "red";
//         nextEl2.style.backgroundColor = "red";
//         nextEl3.style.backgroundColor = "red";

//         cell.classList.add("filled");
//         nextEl.classList.add("filled");
//         nextEl2.classList.add("filled");
//         nextEl3.classList.add("filled");
//         battleshipPlaced = true;
//         carrierPlacement();
//       }

//       cell.disabled = true;
//       nextEl.disabled = true;
//       nextEl2.disabled = true;
//       nextEl3.disabled = true;
//     });
//   });
// }

// // CARRIER  FIELDS 5
// function carrierPlacement() {
//   const playerCells = Array.from(
//     document.querySelectorAll(".player-grid-item")
//   );
//   playerCells.forEach((cell) => {
//     cell.addEventListener("click", () => {
//       let currentId = cell.id;
//       console.log("current: " + cell.id);
//       let nextId;
//       let nextId2;
//       let nextId3;
//       let nextId4;
//       if (currentId % 10 === 0) {
//         nextId = currentId - 1;
//         nextId2 = currentId - 2;
//         nextId3 = currentId - 3;
//         nextId4 = currentId - 4;
//       } else if (currentId % 10 === 9) {
//         nextId = currentId - 1;
//         nextId2 = currentId - 2;
//         nextId3 = currentId - 3;
//         nextId4 = currentId - 4;
//       } else if (currentId % 10 === 8) {
//         nextId = currentId - 1;
//         nextId2 = currentId - 2;
//         nextId3 = currentId - 3;
//         nextId4 = currentId - 4;
//       } else if (currentId % 10 === 7) {
//         nextId = currentId - 1;
//         nextId2 = currentId - 2;
//         nextId3 = currentId - 3;
//         nextId4 = currentId - 4;
//       } else {
//         nextId = Number(currentId) + 1;
//         nextId2 = Number(currentId) + 2;
//         nextId3 = Number(currentId) + 3;
//         nextId4 = Number(currentId) + 4;
//       }
//       console.log(currentId, nextId, nextId2, nextId3, nextId4);
//       let nextEl = document.getElementById(nextId);
//       let nextEl2 = document.getElementById(nextId2);
//       let nextEl3 = document.getElementById(nextId3);
//       let nextEl4 = document.getElementById(nextId4);

//       if (
//         !cell.classList.contains("filled") &&
//         !nextEl.classList.contains("filled") &&
//         !nextEl2.classList.contains("filled") &&
//         !nextEl3.classList.contains("filled") &&
//         !nextEl4.classList.contains("filled") &&
//         !carrierPlaced
//       ) {
//         cell.style.backgroundColor = "red";
//         nextEl.style.backgroundColor = "red";
//         nextEl2.style.backgroundColor = "red";
//         nextEl3.style.backgroundColor = "red";
//         nextEl4.style.backgroundColor = "red";

//         cell.classList.add("filled");
//         nextEl.classList.add("filled");
//         nextEl2.classList.add("filled");
//         nextEl3.classList.add("filled");
//         nextEl4.classList.add("filled");
//         carrierPlaced = true;
//         computerShipsPlacement();
//       }
//       cell.disabled = true;
//       nextEl.disabled = true;
//       nextEl2.disabled = true;
//       nextEl3.disabled = true;
//       nextEl4.disabled = true;
//     });
//   });
// }

// carrierPlacement();

// 0. get array of computer cells
// const computerCells = Array.from(
//   document.querySelectorAll(".computer-grid-item")
// );

// function computerShipsPlacement() {
//   const computerCells = Array.from(
//     document.querySelectorAll(".computer-grid-item")
//   );
//   // document.querySelector(".computer-grid-container").style.display = "block";
//   computerDestroyerPlacement();
//   // computerCruiserPlacement();
//   // computerSubmarinePlacement();
//   // computerBattleshipPlacement();
//   // computerCarrierPlacement();
// }
// // console.log(computerCells);

// // 1. get random number for cell for computer and change class name of clicked cell and (for now) add color which will be removed for the game

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
// }

// function computerDestroyerPlacement() {
//   let shipPlaced = false;
//   while (!shipPlaced) {
//     let selectedCellId = getRandomIntInclusive(101, 200);
//     console.log(selectedCellId);
//     let cell = document.getElementById(selectedCellId);
//     console.log(cell);

//     let nextId;
//     if (selectedCellId % 10 === 0) {
//       nextId = Number(selectedCellId) - 1;
//     } else {
//       nextId = Number(selectedCellId) + 1;
//     }
//     console.log(nextId);
//     let nextEl = document.getElementById(nextId);
//     console.log(nextEl);
//     if (
//       !cell.classList.contains("filled") &&
//       !nextEl.classList.contains("filled")
//     ) {
//       cell.style.backgroundColor = "red";
//       nextEl.style.backgroundColor = "red";
//       cell.classList.add("filled");
//       nextEl.classList.add("filled");
//       shipPlaced = true;
//       computerCruiserPlacement();
//     }

//     // LATER ENABLE WITH A FOR EACH LOOP FOR EACH CELL ELEMENT
//     // cell.disabled = true;
//     // nextEl.disabled = true;
//   }
// }
// function computerCruiserPlacement() {
//   let shipPlaced = false;
//   while (!shipPlaced) {
//     let selectedCellId = getRandomIntInclusive(101, 200);
//     console.log(selectedCellId);
//     let cell = document.getElementById(selectedCellId);
//     console.log(cell);

//     let nextId;
//     let nextId2;
//     if (selectedCellId % 10 === 0 || selectedCellId % 10 === 9) {
//       nextId = Number(selectedCellId) - 1;
//       nextId2 = Number(selectedCellId) - 2;
//     } else {
//       nextId = Number(selectedCellId) + 1;
//       nextId2 = Number(selectedCellId) + 2;
//     }
//     console.log(nextId);
//     let nextEl = document.getElementById(nextId);
//     // console.log(nextEl);

//     let nextEl2 = document.getElementById(nextId2);
//     console.log(nextId2);
//     if (
//       !cell.classList.contains("filled") &&
//       !nextEl.classList.contains("filled") &&
//       !nextEl2.classList.contains("filled")
//     ) {
//       cell.style.backgroundColor = "red";
//       nextEl.style.backgroundColor = "red";
//       nextEl2.style.backgroundColor = "red";

//       cell.classList.add("filled");
//       nextEl.classList.add("filled");
//       nextEl2.classList.add("filled");

//       shipPlaced = true;
//       computerSubmarinePlacement();
//     }

//     // cell.disabled = true;
//     // nextEl.disabled = true;
//     // nextEl2.disabled = true;
//   }
// }

// function computerSubmarinePlacement() {
//   let shipPlaced = false;
//   while (!shipPlaced) {
//     let selectedCellId = getRandomIntInclusive(101, 200);
//     console.log(selectedCellId);
//     let cell = document.getElementById(selectedCellId);
//     console.log(cell);

//     let nextId;
//     let nextId2;
//     if (selectedCellId % 10 === 0 || selectedCellId % 10 === 9) {
//       nextId = Number(selectedCellId) - 1;
//       nextId2 = Number(selectedCellId) - 2;
//     } else {
//       nextId = Number(selectedCellId) + 1;
//       nextId2 = Number(selectedCellId) + 2;
//     }
//     console.log(nextId);
//     let nextEl = document.getElementById(nextId);
//     // console.log(nextEl);

//     let nextEl2 = document.getElementById(nextId2);
//     console.log(nextId2);
//     if (
//       !cell.classList.contains("filled") &&
//       !nextEl.classList.contains("filled") &&
//       !nextEl2.classList.contains("filled")
//     ) {
//       cell.style.backgroundColor = "red";
//       nextEl.style.backgroundColor = "red";
//       nextEl2.style.backgroundColor = "red";

//       cell.classList.add("filled");
//       nextEl.classList.add("filled");
//       nextEl2.classList.add("filled");

//       shipPlaced = true;
//       computerBattleshipPlacement();
//     }

//     // cell.disabled = true;
//     // nextEl.disabled = true;
//     // nextEl2.disabled = true;
//   }
// }

// function computerBattleshipPlacement() {
//   let shipPlaced = false;
//   while (!shipPlaced) {
//     let selectedCellId = getRandomIntInclusive(101, 200);
//     console.log(selectedCellId);
//     let cell = document.getElementById(selectedCellId);
//     console.log(cell);

//     let nextId;
//     let nextId2;
//     let nextId3;
//     if (
//       selectedCellId % 10 === 0 ||
//       selectedCellId % 10 === 9 ||
//       selectedCellId % 10 == 8
//     ) {
//       nextId = Number(selectedCellId) - 1;
//       nextId2 = Number(selectedCellId) - 2;
//       nextId3 = Number(selectedCellId) - 3;
//     } else {
//       nextId = Number(selectedCellId) + 1;
//       nextId2 = Number(selectedCellId) + 2;
//       nextId3 = Number(selectedCellId) + 3;
//     }
//     console.log(nextId);
//     let nextEl = document.getElementById(nextId);
//     // console.log(nextEl);

//     let nextEl2 = document.getElementById(nextId2);
//     let nextEl3 = document.getElementById(nextId3);
//     console.log(nextId2);
//     if (
//       !cell.classList.contains("filled") &&
//       !nextEl.classList.contains("filled") &&
//       !nextEl2.classList.contains("filled") &&
//       !nextEl3.classList.contains("filled")
//     ) {
//       cell.style.backgroundColor = "red";
//       nextEl.style.backgroundColor = "red";
//       nextEl2.style.backgroundColor = "red";
//       nextEl3.style.backgroundColor = "red";

//       cell.classList.add("filled");
//       nextEl.classList.add("filled");
//       nextEl2.classList.add("filled");
//       nextEl3.classList.add("filled");
//       computerCarrierPlacement();

//       shipPlaced = true;
//     }

//     // cell.disabled = true;
//     // nextEl.disabled = true;
//     // nextEl2.disabled = true;
//   }
// }

// function computerCarrierPlacement() {
//   let shipPlaced = false;
//   while (!shipPlaced) {
//     let selectedCellId = getRandomIntInclusive(101, 200);
//     console.log(selectedCellId);
//     let cell = document.getElementById(selectedCellId);
//     console.log(cell);

//     let nextId;
//     let nextId2;
//     let nextId3;
//     let nextId4;
//     if (
//       selectedCellId % 10 === 0 ||
//       selectedCellId % 10 === 9 ||
//       selectedCellId % 10 == 8 ||
//       selectedCellId % 10 == 7
//     ) {
//       nextId = Number(selectedCellId) - 1;
//       nextId2 = Number(selectedCellId) - 2;
//       nextId3 = Number(selectedCellId) - 3;
//       nextId4 = Number(selectedCellId) - 4;
//     } else {
//       nextId = Number(selectedCellId) + 1;
//       nextId2 = Number(selectedCellId) + 2;
//       nextId3 = Number(selectedCellId) + 3;
//       nextId4 = Number(selectedCellId) + 4;
//     }
//     console.log(nextId);
//     let nextEl = document.getElementById(nextId);
//     // console.log(nextEl);

//     let nextEl2 = document.getElementById(nextId2);
//     let nextEl3 = document.getElementById(nextId3);
//     let nextEl4 = document.getElementById(nextId4);
//     console.log(nextId2);
//     if (
//       !cell.classList.contains("filled") &&
//       !nextEl.classList.contains("filled") &&
//       !nextEl2.classList.contains("filled") &&
//       !nextEl3.classList.contains("filled") &&
//       !nextEl4.classList.contains("filled")
//     ) {
//       cell.style.backgroundColor = "red";
//       nextEl.style.backgroundColor = "red";
//       nextEl2.style.backgroundColor = "red";
//       nextEl3.style.backgroundColor = "red";
//       nextEl4.style.backgroundColor = "red";

//       cell.classList.add("filled");
//       nextEl.classList.add("filled");
//       nextEl2.classList.add("filled");
//       nextEl3.classList.add("filled");
//       nextEl4.classList.add("filled");

//       shipPlaced = true;
//       document.querySelector(".computer-grid-container").style.display =
//         "block";
//     }

//     // cell.disabled = true;
//     // nextEl.disabled = true;
//     // nextEl2.disabled = true;
//   }
// }
// computerCarrierPlacement();
// computerSubmarinePlacement();
// computerCruiserPlacement();
// computerDestroyerPlacement();
// computerBattleshipPlacement();

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
// })
