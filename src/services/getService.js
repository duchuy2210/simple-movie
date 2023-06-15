var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
import dotenv from 'dotenv';
import { isEmailValid } from '../utils';

import db from '../models';
dotenv.config();
var salt = bcrypt.genSaltSync(10);

const authService = {
  handleSignUp: async signUpData => {
    return new Promise(async (resolve, reject) => {
      try {
      } catch (error) {
        reject(error);
      }
    });
  },
};
export default authService;
