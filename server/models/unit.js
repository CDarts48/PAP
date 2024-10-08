const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UnitSchema = new Schema({
  property_id: {
    type: Number,
    required: true,
  },
  unit_number: {
    type: String,
    required: true,
  },
  rental_price: {
    type: Number,
  },
  size: {
    type: Number,
  },
  size_unit: {
    type: String,
    enum: ['sqft', 'sqm', 'acre', 'hectare'],
    default: 'sqft',
  },
  number_of_rooms: {
    type: Number,
  },
  unit_type: {
    type: String,
    enum: ['Apartment', 'Office', 'Retail', 'Storage'],
  },
  is_occupied: {
    type: Boolean,
    default: false,
  },
  submeter: {
    type: Schema.Types.Mixed,
  },
}, {
  timestamps: true,
});

const Unit = mongoose.model('Unit', UnitSchema);

module.exports = Unit;