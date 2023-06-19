const models = require("../models");

const startGame = async (req, res) => {
  try {
    const [boats] = await models.boat.findOne("Black Pearl");
    const blackPearl = boats[0];

    blackPearl.coord_x = 1;
    blackPearl.coord_y = 1;

    await models.boat.updatePosition(blackPearl, blackPearl.id);

    const [islands] = await models.tile.getRandomIsland();
    const randomIsland = islands[0];

    await models.tile.hideTreasure(randomIsland);

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = startGame;
