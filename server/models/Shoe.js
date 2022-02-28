const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shoe extends Model {}

Shoe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shoe_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stock: {
      type: DataTypes.INT,
      allowNull: false
    },
    featured: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    // freezeTableName: true,
    underscored: true,
    modelName: 'Shoe'
  }
);

module.exports = Shoe;