const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Example model
class Cardio extends Model {}

// create fields/columns for Post model
Cardio.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    workout: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    video: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // users_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // }
  },
  {
    sequelize,
    modelName: "workouts_cardio",
    freezeTableName: true,
    timestamps: false

  }
);

module.exports = Cardio;
