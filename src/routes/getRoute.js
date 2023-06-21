import express from 'express';
import GetController from '../controllers/GetController';
import { checkToken } from '../middlewares/checkToken';

const getRouter = express.Router();

getRouter.get('/me', checkToken, GetController.getUserById);

export default getRouter;
