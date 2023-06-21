import Cookies from 'js-cookie';
const accessTokenKey = 'access_token';
const refreshTokenKey = 'refresh_token';
const userData = 'user_data';
const objCookies = {
  expires: 7,
  domain: 'localhost',
};

export const saveToken = (access_token, refresh_token) => {
  if (access_token && refresh_token) {
    Cookies.set(accessTokenKey, access_token, {
      ...objCookies,
    });
    Cookies.set(refreshTokenKey, refresh_token, {
      ...objCookies,
    });
  } else {
    Cookies.remove(accessTokenKey, {
      ...objCookies,
      path: '/',
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objCookies,
      path: '/',
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};
export const saveUser = data => {
  Cookies.set(userData, data, {
    ...objCookies,
  });
};

export const getToken = () => {
  const access_token = Cookies.get(accessTokenKey);
  const refresh_token = Cookies.get(refreshTokenKey);
  return {
    access_token,
    refresh_token,
  };
};
// export const getUser = () => {
//   const user_data = Cookies.get(userData);
//   return {
//     user_data,
//   };
// };
export const logOut = () => {
  const access_token = Cookies.get(accessTokenKey);
  if (access_token) {
    Cookies.remove(accessTokenKey, {
      ...objCookies,
      path: '/',
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objCookies,
      path: '/',
      domain: process.env.COOKIE_DOMAIN,
    });
    // Cookies.remove(userData, {
    //   ...objCookies,
    //   path: '/',
    //   domain: process.env.COOKIE_DOMAIN,
    // });
  }
};
