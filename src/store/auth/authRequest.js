import { myAxios } from 'axiosConfig';

export function requestSignUp(payload) {
  console.log('requestSignUp -> payload:', payload);
  return myAxios.request({
    method: 'POST',
    url: '/auth/sign-up',
    data: payload,
  });
}
