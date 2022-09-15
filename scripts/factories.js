function Ship(size) {
  return {
    coordinates: [],
    size,
    hasSunk: false,
    hit: function (n) {
      console.log(`${n} position is hit`), (this.size -= 1);
    },
    isSunk: function () {
      if (this.size <= 0) {
        return (this.hasSunk = true);
      }
    },
  };
}

function Gameboard() {
  return {
    missed: 0,
    missedCoordinates: [],
    shipCoordinates: [],
    ships: {
      // carrier: [],
      // battleship: [],
      // submarine: [],
      // cruiser: [],
      // destroyer: [],
    },
    placeShip: function (ship, x, y) {
      ship.coordinates.push(x, y);
    },
    receiveAttack: function (x, y) {
      let wasHit = false;
      console.log(this.ships);

      for (const ship in this.ships) {
        console.log(this.ships[ship]);
        if (this.ships[ship].includes(x) && this.ships[ship].includes(y)) {
          // ship.hit(coords); - find the ship

          console.log(x, y);
          wasHit = true;
          break;
        }
      }
      if (!wasHit) {
        this.missed++;
        this.missedCoordinates.push([x, y]);
      }
      console.log(wasHit);
      console.log(this.missed);
    },
  };
}

// const board = Gameboard();
// const ship = Ship(3);
// // ship.coordinates = [5, 4];
// board.ships.ship = [5, 4];
// // board.ships.carrier = [5, 4, 4, 2];
// board.receiveAttack(5, 4);
// // console.log(board.ships.carrier);
// // console.log(board.ships.carrier.includes([5, 4]));

function Player(name) {
  return {
    name,
    computerIsPlaying: false,
    isComputer: function () {
      if (!this.isComputerCheck) {
        this.computerIsPlaying = true;
      }
    },
    hasCurrentTurn: true,
    changeTurn: function () {
      if (this.hasCurrentTurn) {
        this.hasCurrentTurn = false;
      } else {
        this.hasCurrentTurn = true;
      }
    },
    winsGame: false,
    points: 0,
    // the total points are 17 (5 + 4 + 3 + 3 + 2)
    addScores: function (computerIsPlaying) {
      if (computerIsPlaying) {
        this.points += 1;
      } else {
        this.points += 1;
      }
      if (this.points >= 17) {
        this.winsGame = true;
      }
    },
    // gameOver: function(winsGame) {
    //   if (this.winsGame) {

    //   }
    // }
  };
}

export { Ship, Gameboard, Player };
