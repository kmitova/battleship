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

const board = Gameboard();
const ship = Ship(3);
// ship.coordinates = [5, 4];
board.ships.ship = [5, 4];
// board.ships.carrier = [5, 4, 4, 2];
board.receiveAttack(5, 4);
// console.log(board.ships.carrier);
// console.log(board.ships.carrier.includes([5, 4]));

export { Ship, Gameboard };
