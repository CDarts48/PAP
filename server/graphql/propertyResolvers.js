const Property = require('../models/Property'); // Import the Property model

const propertyResolvers = {
  Query: {
    properties: async () => {
      return await Property.findAll();
    },
    property: async (_, { id }) => {
      return await Property.findByPk(id);
    },
    propertyByAddress: async (_, { address }) => {
      return await Property.findOne({ where: { property_address: address } });
    },
  },
  Mutation: {
    createProperty: async (_, { propertyInput }) => {
      return await Property.create(propertyInput);
    },
    updateProperty: async (_, { id, propertyInput }) => {
      console.log(`Updating property with ID: ${id}`);
      console.log('Property Input:', propertyInput);
      await Property.update(propertyInput, { where: { property_id: id } });
      const updatedProperty = await Property.findByPk(id);
      console.log('Updated Property:', updatedProperty);
      return updatedProperty;
    },
    deleteProperty: async (_, { id }) => {
      console.log(`Deleting property with ID: ${id}`);
      const property = await Property.findByPk(id);
      console.log('Property to be deleted:', property);
      await Property.destroy({ where: { property_id: id } });
      console.log('Deleted Property:', property);
      return property;
    },
  },
};

module.exports = propertyResolvers;