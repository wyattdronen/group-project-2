const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Exercise extends Model {
  }

Exercise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
  },
    type_of_exercise: {
      type: DataTypes.STRING,
      allowNull: false,
  },
    max_weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    routine_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'routine',
        key: 'id',
      }
    }
  }
)

module.exports = Exercise