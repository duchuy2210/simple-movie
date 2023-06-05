import express from 'express';
import AuthController from '../controllers/AuthController';

const authRouter = express.Router();

authRouter.post('/sign-up', AuthController.handleSignUp);

export default authRouter;
