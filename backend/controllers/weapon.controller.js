const db = require("../models");
const Weapon = db.weapons;
const Op = db.Sequelize.Op;

// Create and Save a new Weapon
exports.create = (req, res) => {
  // Validate request
  if (!req.body.type || !req.body.element || !req.body.monster){
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }
  
  // Create a Weapon
  const weapon = {
    type: req.body.type,
    element: req.body.element,
    monster: req.body.monster,
    filename: req.file ? req.file.filename : ""
  }

  // Save Weapon in the database
  Weapon.create(weapon).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the weapon"
    })
  });
};

// Retrieve all Weapons from the database.
exports.findAll = (req, res) => {
  Weapon.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Weapons"
    })
  })
};

// Find a single Weapon with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Weapon.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error retrieving Weapon with id=${id}`
      });
    });
};

// Update a Weapon by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Weapon.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Weapon was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Weapon with id=${id}. Maybe Weapon was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Weapon with id=${id}`
      });
    });
};

// Delete a Weapon with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Weapon.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Weapon was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Weapon with id=${id}. Maybe Weapon was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Weapon with id=${id}`
      });
    });
};
