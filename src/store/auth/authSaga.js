import { takeLatest } from 'redux-saga/effects';
import { actionSignIn, actionSignUp } from './authAction';
import { handleSignIn, handleSignUp } from './authHandler';

export default function* authSaga() {
  yield takeLatest(actionSignUp.type, handleSignUp);
  yield takeLatest(actionSignIn.type, handleSignIn);
}
