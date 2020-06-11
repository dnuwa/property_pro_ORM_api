import PropertyService from "../sevices/PropertyService";
import Util from "../utils";
import { verify } from "jsonwebtoken";

const util = new Util();

class PropertyController {
  static async postProperty(req, res) {
    const {
      title,
      description,
      city,
      address,
      type,
      photo,
      price,
      rooms,
      status,
    } = req.body;

    const newPropertyObj = {
      userId: req.userId,
      title,
      description,
      city,
      address,
      type,
      photo,
      price,
      rooms,
      status,
      isActive: true,
    };
    try {
      const creatProperty = await PropertyService.addPropert(newPropertyObj);
      return res.status(201).send({
        status: 201,
        message: "Property Successfully Created",
        data: {
          propertyId: creatProperty.dataValues.id,
          postedBy: creatProperty.dataValues.userId,
          title: creatProperty.dataValues.title,
          description: creatProperty.dataValues.description,
          city: creatProperty.dataValues.city,
          address: creatProperty.dataValues.address,
          type: creatProperty.dataValues.type,
          photo: creatProperty.dataValues.photo,
          price: creatProperty.dataValues.price,
          rooms: creatProperty.dataValues.rooms,
          status: creatProperty.dataValues.status,
          isActive: creatProperty.dataValues.isActive,
        },
      });
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async getall(req, res) {
    try {
      const allProperties = await PropertyService.getAllProperties();
      return res.status(200).send({
        status: 200,
        message: "success",
        data: allProperties,
      });
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async getOne(req, res) {
    const { id } = req.params;
    try {
      const theProperty = await PropertyService.getOneProperty(id);
      // console.log(theProperty);
      if (!theProperty) {
        return res.status(400).send({
          status: 400,
          message: `Property with id ${id} doesn't exist`,
        });
      }
      return res.status(200).send({
        status: 200,
        message: "success",
        data: theProperty,
      });
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async getmyall(req, res){
    const userId = req.userId;
    try {
      const allProperties = await PropertyService.userSpecProperties(userId);
      return res.status(200).send({
        status: 200,
        message: "success",
        data: allProperties,
      });
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async editProperty(req, res) {
    const {
      title,
      description,
      city,
      address,
      type,
      photo,
      price,
      rooms,
      status,
    } = req.body;

    const { id } = req.params;

    const newData = {
      title,
      description,
      city,
      address,
      type,
      photo,
      price,
      rooms,
      status,
    };

    try {
      const updatedObj = await PropertyService.updateProperty(id, newData);
      if (!updatedObj) {
        return res.status(400).send({
          status: 400,
          message: `Property with id ${id} doesn't exist`,
        });
      }
      return res.status(200).send({
        status: 200,
        message: "success",
        data: updatedObj,
      });
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async softDelete(req, res){
    console.log(`this has been called :)`)
    const { id } = req.params;
    const newValue = {
      isActive: false
    };
    try {
      const thePropertyToSoftdel = await PropertyService.softDel(id, newValue);
      if (!thePropertyToSoftdel) {
        return res.status(400).send({
          status: 400,
          message: `Property with id ${id} doesn't exist`,
        });
      }
      return res.status(200).send({
        status: 200,
        message: "success",
        data: thePropertyToSoftdel,
      });
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default PropertyController;
