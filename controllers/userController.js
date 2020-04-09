const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db.User.findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log('findById-req.body', req.body);
    db.User.findByPk(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    console.log('FindByEmail-req.body', req.body);
    db.User.findOne({
      where: { email: req.body.email }
      // include: [{model: Apikey}]
    })
      .then(function(dbModel) {
        console.log('findByEmail - dbModel', dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log('create: request body ...', req.body);
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log('update: request body ...', req.body);
    console.log('update: req param id...', req.params.id);
    db.User.findByPk(req.params.id)
      .then(dbModel =>
        dbModel.update(req.body, { where: { id: req.params.id } })
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
