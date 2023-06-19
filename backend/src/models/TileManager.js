const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  constructor() {
    super({ table: "tile" });
  }

  findCoords(coordX, coordY) {
    return this.connection.query(
      `select * from  ${this.table} where coord_x = ? and coord_y = ?`,
      [coordX, coordY]
    );
  }

  getRandomIsland() {
    return this.connection.query(
      `select * from ${this.table} where type = "island" order by rand() limit 1`
    );
  }

  hideTreasure(randomIsland) {
    return this.connection.query(
      `update ${this.table} set has_treasure = 0;
      update ${this.table} set has_treasure = 1 where coord_x = ? and coord_y = ?`,
      [randomIsland.coord_x, randomIsland.coord_y]
    );
  }
}

module.exports = TileManager;
