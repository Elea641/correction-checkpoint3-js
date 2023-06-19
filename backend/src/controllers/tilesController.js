const models = require("../models");

const getAll = async (req, res) => {
  try {
    const tiles = await models.tile.findAll();
    if (tiles.length === 0) {
      res.status(404).send("No tiles found");
    } else {
      res.status(200).send(tiles[0]);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getAll };
