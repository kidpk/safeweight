const router = require('express').Router();
const resistController = require('../../controllers/resistController');

// Matches with "/api/user"
router
  .route('/')
  .get(resistController.findAll)
//   .post(resistController.create);

router
  .route("/:id")
  .get(resistController.findById)
//   .put(resistController.update)
//   .delete(resistController.remove);


module.exports = router;
