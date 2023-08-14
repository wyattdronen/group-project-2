const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class UserData extends Model {
}

  UserData.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
  
      height: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      weight: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      weight_goal: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        }
      }
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
  )

  module.exports = UserData;
  