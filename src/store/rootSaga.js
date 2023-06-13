import { all, fork } from 'redux-saga/effects';
import authSaga from './auth/authSaga';

//WATCHES SAGA
export default function* rootSaga() {
  yield all([fork(authSaga)]);
}