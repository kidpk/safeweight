const db = require('../models');

module.exports = {
  findByLogin: function(req, res) {
    console.log('findByLogin-req.body', req.body);
    db.User.findOne({
      where: { email: req.body.email }
      // include: [{model: Apikey}]
    })
      .then(function(dbModel) {
        console.log('findByLogin - dbModel', dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  }
};
