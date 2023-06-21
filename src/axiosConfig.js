import axios from 'axios';
import { getToken, saveToken } from 'helpers/handleCookies';
import { forceSignOut } from 'store/store';
import jwt_decode from 'jwt-decode';

export const myAxios = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});

const createMyAxios = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
  });

  instance.interceptors.request.use(
    config => {
      const { access_token } = getToken();
      if (!config.headers['Authorization'] && access_token) {
        config.headers['Authorization'] = `Bearer ${access_token}`;
      }
      return config;
    },
    error => Promise.reject(error)
  );

  instance.interceptors.response.use(
    // Nếu không có lỗi thì chạy bình thường
    response => response,
    // Nếu trả về lỗi thì config lại để reset được access token
    async error => {
      console.log(error?.response?.data?.message);
      // return new Promise(async resolve => {
      const originalRequest = error.config;
      // Nếu khi gọi request mà phát hiện người dùng đã bị xóa thì sẽ logOut
      if (
        // error?.response?.data?.message === 'User Not Found or is Deleted' ||
        error?.response?.data?.message === 'access_token is needed' ||
        error?.response?.data?.message === 'refresh_token is needed'
      ) {
        forceSignOut();
      } else if (error?.response?.status === 403) {
        try {
          // Nếu có lỗi và lỗi trả về là 403 thì gửi lại request yêu cầu reset access token
          const { refresh_token } = getToken();
          const { data } = await myAxios.post('/auth/refresh-token', {
            refresh_token,
          });

          saveToken(data.new_access_token, data.new_refresh_token);
          console.log('Refresh token successfully');
          // Đổi lại headers và gọi lại request
          originalRequest.headers[
            'Authorization'
          ] = `Bearer ${data.new_access_token}`;
          return instance(originalRequest);
        } catch (err) {
          console.log(err);
          // Nếu refresh token hết hạn thì logOut
          if (err?.response?.data?.message === 'refreshToken not found') {
            forceSignOut();
          }
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export const privateAxios = createMyAxios();
