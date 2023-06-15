import authService from '../services/authService';

const AuthController = {
  handleSignUp: async (req, res) => {
    try {
      const { status, payload } = await authService.handleSignUp(req.body);
      return res.status(status).json(payload);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
export default AuthController;
