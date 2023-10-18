const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

// now we initilize the sequelize with the configigration from the table
const sequelize = new Sequelize(config);

// now test the database
sequelize
  .authenticate()
  .then(() => {
    console.log("datbase is connected succesfully");
  })
  .catch((err) => {
    console.log("unable to connect the databse ", err);
  });

module.exports = sequelize;
