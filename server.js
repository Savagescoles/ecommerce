// Dependants //
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
 
// Express //
const app = express();
const PORT = process.env.PORT || 15000;

// Sets up the Express app to handle data parsing //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes //

app.use(routes);

// sequelize the db and turn it all on //
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
});

