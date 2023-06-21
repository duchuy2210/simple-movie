import getService from '../services/getService';

const GetController = {
  getUserById: async (req, res) => {
    try {
      const { status, payload } = await getService.getUserById(req.id);
      return res.status(status).json(payload);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
export default GetController;
