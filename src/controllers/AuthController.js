import authService from '../services/authService';

const AuthController = {
  handleSignUp: async (req, res) => {
    try {
      const { status, payload } = await authService.handleSignUp(req.body);
      return res.status(status).json(payload);
      // return res.status(200).json(req.body);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
export default AuthController;
