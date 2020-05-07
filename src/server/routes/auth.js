import { Router } from 'express';
import UserController from '../controllers/UserController';
import {
    fieldValidation,
    validateNames,
    validateEmail,
    validatePassword,
    validatePhoneNumber,
    validateSignin,
  } from '../middleware/authValidation';

const authRouter = Router();

authRouter.post('/signup/', fieldValidation, validateEmail, validateNames,
validatePassword, validatePhoneNumber, UserController.addUser);

authRouter.post('/login/', validateSignin, UserController.signin);

export default authRouter;
