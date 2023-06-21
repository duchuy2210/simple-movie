import dotenv from 'dotenv';

import db from '../models';
dotenv.config();

const getService = {
  getUserById: async userId => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await db.User.findOne({
          where: { id: userId },
          attributes: { exclude: ['password'] },
          raw: true,
        });

        if (!data) {
          return resolve({
            status: 404,
            payload: {
              message: 'Data not found',
            },
          });
        }
        return resolve({
          status: 200,
          payload: {
            message: `Get data successfully`,
            data: data,
          },
        });
      } catch (err) {
        reject(err);
      }
    });
  },
};
export default getService;
