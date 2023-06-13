import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';
import { requestSignUp } from './authRequest';
import { setLoadingSignUp } from './authSlice';

export default function* handleSignUp(action) {
  console.log('action:', action);
  const { payload } = action;
  yield put(setLoadingSignUp(true));
  try {
    const response = yield call(requestSignUp, payload);
    toast.success(response.data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  } finally {
    yield put(setLoadingSignUp(false));
  }
}
