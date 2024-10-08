const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TenantSchema = new Schema({
  tenant_id: {
    type: Number,
    autoIncrement: true,
    primaryKey: true,
  },
  property_id: {
    type: Number,
    required: true,
    ref: 'Property', // Assuming 'Property' is the name of the other model
  },
  business_name: {
    type: String,
    required: true,
  },
  business_type: {
    type: String,
    required: true,
  },
  contact_person: {
    type: String,
    required: true,
  },
  contact_email: {
    type: String,
    required: true,
    // Add your email validation here
  },
  contact_phone: {
    type: String,
    required: true,
  },
  lease_start_date: {
    type: Date,
    required: true,
  },
  lease_end_date: {
    type: Date,
  },
  monthly_rent: {
    type: Number,
    required: true,
  },
  annual_rent_increase_percent: {
    type: Number,
  },
  security_deposit: {
    type: Number,
  },
  lease_status: {
    type: String,
    enum: ['Active', 'Terminated', 'Pending'],
    default: 'Active',
  },
  unit_size: {
    type: Number,
    required: true,
  },
  size_unit: {
    type: String,
    enum: ['sqft', 'sqm', 'acre', 'hectare'],
    default: 'sqft',
  },
  number_of_employees: {
    type: Number,
  },
  payment_history: {
    type: Schema.Types.Mixed, // JSON type in Mongoose
  },
  business_hours: {
    type: Schema.Types.Mixed, // JSON type in Mongoose
  },
  emergency_contact_name: {
    type: String,
  },
  emergency_contact_phone: {
    type: String,
  },
  notes: {
    type: String,
  },
}, {
  timestamps: true,
});

const Tenant = mongoose.model('Tenant', TenantSchema);

module.exports = Tenant;