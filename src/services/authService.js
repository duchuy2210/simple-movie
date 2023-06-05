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
        // Kiểm tra xem có nhập email password, user_name không
        if (
          !signUpData.email ||
          !signUpData.password ||
          !signUpData.user_name
        ) {
          return resolve({
            status: 422,
            payload: {
              message: 'Nhập thiếu dữ liệu',
            },
          });
        }

        // Check validate Email
        if (!isEmailValid(signUpData.email)) {
          return resolve({
            status: 422,
            payload: {
              message: 'Email không hợp lệ',
            },
          });
        }

        //Kiểm tra xem đã tồn tại User này chưa
        const isAlreadyExist = await db.Users.findOne({
          where: { email: signUpData.email },
          attributes: { exclude: ['password'] },
          raw: true,
        });
        if (isAlreadyExist) {
          return resolve({
            status: 409,
            payload: {
              message: 'Tài khoản đã tồn tại',
            },
          });
        }

        //Không có lỗi thì tạo user mới và lưu vào database
        //CÓ THỂ DÙNG CREATE THÁY THẾ BUILD VÀ SAVE
        const newUser = await db.Users.build(
          {
            ...signUpData,
            password: bcrypt.hashSync(signUpData.password, salt),
            role_id: 0,
            is_banned: false,
          },
          { raw: true }
        );
        await newUser.save();
        return resolve({
          status: 200,
          payload: {
            message: 'Đăng ký thành công',
          },
        });
      } catch (error) {
        reject(error);
      }
    });
  },
};
export default authService;
