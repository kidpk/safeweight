// import router
const router = require('express').Router();
// import api route files
const cardioRoutes = require('./cardio-routes');
const resistRoutes = require('./resist-routes');
const userRoutes = require('./user-routes');
const loginRoutes = require('./login-routes');

// set up and prepend api routes from imported files
router.use('/user', userRoutes);
router.use('/login', loginRoutes);
router.use('/cardio', cardioRoutes);
router.use('/resist', resistRoutes);

// export packaged routes
module.exports = router;
