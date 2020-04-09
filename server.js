const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3002;

// sequelize.authenticate().then(() => console.log("database connected ... "))
// .catch(err => console.log("error " + err ));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets (usually on heroku)
//  if (process.env.NODE_ENV === 'production') {
//    app.use(express.static('client/public'));
//  }
// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`now listening on ${PORT}..`));
});
