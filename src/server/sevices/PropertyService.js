import db from "../../db/models";

class PropertyService {
  static async addPropert(newProperty) {
    try {
      return await db.Property.create(newProperty);
    } catch (error) {
      throw error;
    }
  }

  static async getAllProperties() {
    try {
      return await db.Property.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getOneProperty(propertyId) {
    try {
      const theProperty = await db.Property.findOne({
        where: { id: Number(propertyId) },
      });
      return theProperty;
    } catch (error) {
      throw error;
    }
  }

  static async userSpecProperties(id){
    try {
      const properties = await db.Property.findAll({
        where: { userId: id }
      });
      return properties;
    } catch (error) {
      throw error;
    }
  }

  static async updateProperty(id, propertyObj) {
    try {
      const propertyToUpdate = await db.Property.findOne({
        where: { id: Number(id) }
      });

      if (propertyToUpdate) {
        await db.Property.update(propertyObj, { where: { id: Number(id) } });

        return propertyObj;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async softDel(propId, deActivate){
    try {

      const propertyToRemove = await db.Property.findOne({
        where: { id: Number(propId) }
      });
      if (propertyToRemove) {
        await db.Property.update(deActivate, { where: { id: Number(propId) } });

        return deActivate;
      }
      return null; 
    } catch (error) {
      throw error;
    }
  }
}

export default PropertyService;
