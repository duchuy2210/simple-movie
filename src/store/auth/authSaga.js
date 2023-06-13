import { takeLatest } from 'redux-saga/effects';
import handleSignUp from './authHandler';
import { authSignIn, authSignUp } from './authSlice';
export default function* authSaga() {
  yield takeLatest(authSignUp.type, handleSignUp);
}
