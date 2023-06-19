const models = require("../models");

const getByName = async (req, res) => {
  try {
    const [rows] = await models.boat.findOne(req.query.name);
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const updatePositionOnId = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBoat = await models.boat.updatePosition(req.body, id);
    if (updatedBoat[0].affectedRows === 1) {
      res.status(204).send("Boat position updated successfully");
    } else {
      res.status(404).send("Boat not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getByName,
  updatePositionOnId,
};
