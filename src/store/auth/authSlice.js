import { logOut } from 'helpers/handleCookies';

const { createSlice } = require('@reduxjs/toolkit');
const initialState = {
  userData: {},
  loadingGetThisUserData: false,
  loadingSignUp: false,
  loadingSignIn: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => ({
      ...state,
      userData: { ...state.userData, ...action.payload },
    }),
    setLoadingSignUp: (state, { payload }) => ({
      ...state,
      loadingSignUp: payload,
    }),
    setLoadingSignIn: (state, { payload }) => ({
      ...state,
      loadingSignIn: payload,
    }),
    setLoadingGetThisUserData: (state, { payload }) => ({
      ...state,
      loadingGetThisUserData: payload,
    }),
    signOut: state => {
      logOut();
      return {
        ...state,
        userData: initialState.userData,
      };
    },
  },
});
export const {
  setUserData,
  setLoadingSignUp,
  setLoadingSignIn,
  setLoadingGetThisUserData,
  signOut,
} = authSlice.actions;

export default authSlice.reducer;
