import { takeLatest } from 'redux-saga/effects';
import { actionSignIn, actionSignUp, actionThisUserData } from './authAction';
import {
  handleGetThisUserData,
  handleSignIn,
  handleSignUp,
} from './authHandler';

export default function* authSaga() {
  yield takeLatest(actionSignUp.type, handleSignUp);
  yield takeLatest(actionSignIn.type, handleSignIn);
  yield takeLatest(actionThisUserData.type, handleGetThisUserData);
}
