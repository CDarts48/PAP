const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountTableDataSchema = new Schema({
  label: String,
  actual: Number,
  assessed: Number,
}, {
  _id: false, // This line ensures that MongoDB doesn't create an id for subdocuments
});

const PropertySchema = new Schema({
  property_address: {
    type: String,
    required: true,
  },
  property_type: {
    type: String,
    enum: ['Residential', 'Commercial', 'Industrial', 'Land'],
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  postal_code: {
    type: String,
  },
  country: {
    type: String,
  },
  purchase_price: {
    type: Number,
  },
  purchase_date: {
    type: Date,
  },
  assessed_value: {
    value: {
      type: Number,
    },
    accountTableData: [AccountTableDataSchema],
  },
  assessment_date: {
    type: Date,
  },
  rental_income: {
    type: Number,
  },
  property_size: {
    type: Number,
  },
  size_unit: {
    type: String,
    enum: ['sqft', 'sqm', 'acre', 'hectare'],
    default: 'sqft',
  },
  year_built: {
    type: Number,
  },
  description: {
    type: String,
  },
  amenities: {
    type: Schema.Types.Mixed,
  },
  property_manager: {
    type: String,
  },
}, {
  timestamps: true,
});

const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;