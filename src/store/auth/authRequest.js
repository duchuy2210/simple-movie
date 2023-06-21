import { myAxios, privateAxios } from 'axiosConfig';

export function requestSignUp(payload) {
  return myAxios.request({
    method: 'POST',
    url: '/auth/sign-up',
    data: payload,
  });
}

export function requestSignIn(payload) {
  return myAxios.request({
    method: 'POST',
    url: '/auth/sign-in',
    data: payload,
  });
}
export function requestGetThisUserData() {
  return privateAxios.request({
    method: 'GET',
    url: '/g/me',
  });
}
