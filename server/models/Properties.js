// property.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Unit = require('./Unit'); // Import the Unit model

const Property = sequelize.define('Property', {
  property_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  property_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  property_type: {
    type: DataTypes.ENUM('Residential', 'Commercial', 'Industrial', 'Land'),
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  postal_code: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  purchase_price: {
    type: DataTypes.DECIMAL(15, 2),
  },
  purchase_date: {
    type: DataTypes.DATE,
  },
  assessed_value: {
    type: DataTypes.DECIMAL(15, 2),
  },
  assessment_date: {
    type: DataTypes.DATE,
  },
  rental_income: {
    type: DataTypes.DECIMAL(15, 2),
  },
  property_size: {
    type: DataTypes.DECIMAL(10, 2),
  },
  size_unit: {
    type: DataTypes.ENUM('sqft', 'sqm', 'acre', 'hectare'),
    defaultValue: 'sqft',
  },
  year_built: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.TEXT,
  },
  amenities: {
    type: DataTypes.JSON,
  },
  property_manager: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true,
});

// Define association with the Unit model
Property.hasMany(Unit, { foreignKey: 'property_id', as: 'units' });
Unit.belongsTo(Property, { foreignKey: 'property_id' });

module.exports = Property;
