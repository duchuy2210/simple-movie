const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  userData: {},
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
  },
});
export const { setUserData, setLoadingSignUp, setLoadingSignIn } =
  authSlice.actions;

export default authSlice.reducer;
