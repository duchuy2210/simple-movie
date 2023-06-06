import express from 'express';
import AuthController from '../controllers/AuthController';

const authRouter = express.Router();

authRouter.post('/sign-up', AuthController.handleSignUp);
authRouter.post('/sign-in', AuthController.handleSignIn);
authRouter.post('/refresh-token', AuthController.handleRefreshToken);

export default authRouter;
