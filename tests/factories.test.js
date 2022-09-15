import { Ship, Gameboard } from "../scripts/factories.js";

describe("test gameboard factory", () => {
  const board = Gameboard();
  const ship = Ship(3);
  board.ships.ship = [3, 4, 5, 1];
  test("gameboard is defined", () => {
    expect(board).toBeDefined();
  });
  test("missed is 0", () => {
    expect(board.missed).toBe(0);
  });
  test("placeShip", () => {
    board.placeShip(ship, 1, 2);
    expect(ship.coordinates).toContain(1);
    expect(ship.coordinates).toContain(2);
  });
  test("receiveAttack", () => {
    board.receiveAttack(3, 4);
    expect(board.ships.ship.includes(3)).toBeTruthy();
    expect(board.ships.ship.includes(4)).toBeTruthy();
    expect(board.missed).toBe(0);
    board.receiveAttack(6, 8);
    expect(board.missed).toBe(1);
  });
});

describe("test ship factory", () => {
  const ship = Ship(5);
  test("ship is defined", () => {
    expect(ship).toBeDefined();
  });
  test("size of ship is correct", () => {
    expect(ship.size).toBe(5);
  });
  test("hasSunk variable is false initially", () => {
    expect(ship.hasSunk).toBeFalsy();
  });
  // test("hit function", () => {
  //   ship.hit(5);
  //   expect(ship.size).toBe(4);
  // });
  // test("isSunk function", () => {
  //   // ship.hit(5);
  //   ship.hit(4);
  //   ship.hit(3);
  //   ship.hit(2);
  //   ship.hit(1);
  //   expect(ship.size).toBe(0);
  //   expect(ship.isSunk()).toBe((ship.hasSunk = true));
  //   expect(ship.hasSunk).toBeTruthy();
  // });
});
