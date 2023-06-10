const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  userData: {},
  loadingSignUp: false,
  loadingSignIn: false,
  messageSignUpError: '',
  messageSignInError: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => ({
      ...state,
      userData: { ...state.userData, ...action.payload },
    }),
    login: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    register: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});
export const { setUserData } =
  authSlice.actions;

export default authSlice.reducer;
