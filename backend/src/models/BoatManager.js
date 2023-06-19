const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  findOneByName(name) {
    return this.connection.query(`SELECT * FROM ${this.table} where name = ?`, [
      name,
    ]);
  }

  findOne(name) {
    return this.connection.query(
      `select boat.*, tile.type, tile.has_treasure from  ${this.table}
        join tile on
          boat.coord_x = tile.coord_x and
          boat.coord_y = tile.coord_y
        where name = ?`,
      [name]
    );
  }

  updatePosition(position, id) {
    return this.connection.query(
      `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      [position.coord_x, position.coord_y, id]
    );
  }
}

module.exports = BoatManager;
