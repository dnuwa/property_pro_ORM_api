import { Router } from 'express';
import UserController from '../controllers/UserController'

const authRouter = Router();

authRouter.post('/signup/', UserController.addUser);

export default authRouter;
