import { saveToken } from 'helpers/handleCookies';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';
import { requestSignIn, requestSignUp } from './authRequest';
import { setLoadingSignIn, setLoadingSignUp, setUserData } from './authSlice';

export function* handleSignUp(action) {
  const { payload } = action;
  yield put(setLoadingSignUp(true));
  try {
    const response = yield call(requestSignUp, payload.values);
    toast.success(response.data.message);
    payload.onSuccess();
  } catch (error) {
    toast.error(error.response.data.message);
  } finally {
    yield put(setLoadingSignUp(false));
  }
}

export function* handleSignIn(action) {
  const { payload } = action;
  yield put(setLoadingSignIn(true));
  try {
    const { data } = yield call(requestSignIn, payload.values);
    yield put(setUserData(data.userData));
    saveToken(data.access_token, data.refresh_token);
    payload.onSuccess();
  } catch (error) {
    toast.error(error.response.data.message);
  } finally {
    yield put(setLoadingSignIn(false));
  }
}
