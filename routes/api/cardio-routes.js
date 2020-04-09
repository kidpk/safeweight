const router = require('express').Router();
const cardioController = require('../../controllers/cardioController');

// Matches with "/api/user"
router
  .route('/')
  .get(cardioController.findAll)
//   .post(cardioController.create);

router
  .route("/:id")
  .get(cardioController.findById)
//.put(cardioController.update)
//.delete(cardioController.remove);


module.exports = router;
