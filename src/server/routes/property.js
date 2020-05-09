import { Router } from 'express';
import PropertyController from '../controllers/PropertyController';
import Auth from '../middleware';
import { validateEmptyFields } from '../middleware/propertyValidation';

const propertyRouter = Router();

const verifyUser = Auth.verifyToken
propertyRouter.post('/property', verifyUser, validateEmptyFields, PropertyController.postProperty);
propertyRouter.get('/property', PropertyController.getall);
propertyRouter.get('/property/:id', PropertyController.getOne);


// admin routes
propertyRouter.get('/admin/property', verifyUser, PropertyController.getmyall);//return only my properties
propertyRouter.patch('/admin/property/:id', verifyUser, validateEmptyFields, PropertyController.editProperty);//edit property posting
propertyRouter.patch('/admin/del/property/:id', verifyUser, PropertyController.softDelete);//change isActive to false

export default propertyRouter;
