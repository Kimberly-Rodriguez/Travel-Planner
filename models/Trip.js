const { Model, DataTypes } = require('sequelize');
const { Traveller } = require('.');
const sequelize = require('../config/connection');

// create our Trip model
class Trip extends Model {}

// create fields/columns for Trip model
Trip.init(
  { id:{type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
  },
  trip_budget:{ 
    type:DataTypes.INTEGER,
    allowNull:false
  },
  traveller_amount:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  traveller_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    references:{
      model:"traveller",
      key:"id"
    },
  },
    location_id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:"location",
        key:"id"
      }
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip'
  }
);

module.exports = Trip;
