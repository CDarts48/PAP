// tenant.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a configured Sequelize instance

const Tenant = sequelize.define('Tenant', {
  tenant_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  property_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Property', // Name of the Property table
      key: 'property_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  business_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  business_type: {
    type: DataTypes.STRING, // e.g., 'Retail', 'Office', 'Restaurant', etc.
    allowNull: false,
  },
  contact_person: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  contact_phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lease_start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  lease_end_date: {
    type: DataTypes.DATE,
  },
  monthly_rent: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  annual_rent_increase_percent: {
    type: DataTypes.FLOAT, // Represents annual rent increase percentage
  },
  security_deposit: {
    type: DataTypes.DECIMAL(15, 2),
  },
  lease_status: {
    type: DataTypes.ENUM('Active', 'Terminated', 'Pending'),
    defaultValue: 'Active',
  },
  unit_size: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  size_unit: {
    type: DataTypes.ENUM('sqft', 'sqm', 'acre', 'hectare'),
    defaultValue: 'sqft',
  },
  number_of_employees: {
    type: DataTypes.INTEGER, // Number of employees working in the leased space
  },
  payment_history: {
    type: DataTypes.JSON, // Optional, can store payment details as an array of objects
  },
  business_hours: {
    type: DataTypes.JSON, // Stores the business operating hours as a JSON object
  },
  emergency_contact_name: {
    type: DataTypes.STRING,
  },
  emergency_contact_phone: {
    type: DataTypes.STRING,
  },
  notes: {
    type: DataTypes.TEXT, // Any additional notes about the tenant
  },
}, {
  timestamps: true,
  tableName: 'Tenant',
});

module.exports = Tenant;
