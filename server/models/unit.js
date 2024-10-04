// unit.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Tenant = require('./tenant');

const Unit = sequelize.define('Unit', {
  unit_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  property_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Property',
      key: 'property_id',
    },
  },
  unit_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rental_price: {
    type: DataTypes.DECIMAL(15, 2),
  },
  size: {
    type: DataTypes.DECIMAL(10, 2),
  },
  size_unit: {
    type: DataTypes.ENUM('sqft', 'sqm', 'acre', 'hectare'),
    defaultValue: 'sqft',
  },
  number_of_rooms: {
    type: DataTypes.INTEGER,
  },
  unit_type: {
    type: DataTypes.ENUM('Apartment', 'Office', 'Retail', 'Storage'),
  },
  is_occupied: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  submeter: {
    type: DataTypes.JSON,
    allowNull: true,
  },
}, {
  timestamps: true,
});

// Define association with the Tenant model
Unit.hasMany(Tenant, { foreignKey: 'unit_id', as: 'tenants' });
Tenant.belongsTo(Unit, { foreignKey: 'unit_id' });

module.exports = Unit;
