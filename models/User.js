const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Example model
class User extends Model {}



// create fields/columns for Post model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: true,
      primaryKey: true,
      // User.hasMany(workouts, {foreignKey: 'cardio_id'}, {foriegnKey: 'resistance_id'});
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    gender: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    passwd: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }


    }
  },
  {
    sequelize,
    modelName: "users",
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = User;
