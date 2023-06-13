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
    userData: (state, action) => ({
      ...state,
      userData: { ...state.userData, ...action.payload },
    }),
    setLoadingSignUp: (state, { payload }) => ({
      ...state,
      loadingSignUp: payload,
    }),
    authSignIn: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authSignUp: (state) => ({
      ...state,
    }),
  },
});
export const { userData, authSignIn, authSignUp, setLoadingSignUp } =
  authSlice.actions;

export default authSlice.reducer;
