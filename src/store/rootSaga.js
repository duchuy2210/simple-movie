import { all, fork } from 'redux-saga/effects';
// import newsSaga from './news/saga';

//WATCHES SAGA
export default function* rootSaga() {
  //dùng fork vì các saga kh cần phải đợi chạy liên tiếp
  // yield all([fork(newsSaga)]);
}