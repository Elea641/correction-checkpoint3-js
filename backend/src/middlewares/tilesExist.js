const models = require("../models");

const tilesExist = async (req, res, next) => {
  try {
    const tiles = await models.tile.findCoords(
      req.body.coord_x,
      req.body.coord_y
    );

    if (tiles[0][0] != null) {
      next();
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

module.exports = tilesExist;
