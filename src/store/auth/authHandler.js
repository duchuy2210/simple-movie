import { saveToken, saveUser } from 'helpers/handleCookies';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';
import {
  requestGetThisUserData,
  requestSignIn,
  requestSignUp,
} from './authRequest';
import {
  setLoadingGetThisUserData,
  setLoadingSignIn,
  setLoadingSignUp,
  setUserData,
} from './authSlice';

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
    // yield call(handleGetThisUserData, { payload: data.access_token });
    payload.onSuccess();
  } catch (error) {
    console.log('error:', error);
    // toast.error(error.response.data.message);
  } finally {
    yield put(setLoadingSignIn(false));
  }
}

export function* handleGetThisUserData() {
  yield put(setLoadingGetThisUserData(true));
  try {
    const { data } = yield call(requestGetThisUserData);
    if (data) {
      const userData = data.data;
      console.log('userData:', userData);
      // yield put(setUserData(userData));
      // saveUser(userData);
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setLoadingGetThisUserData(false));
  }
}
