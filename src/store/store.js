import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import { signOut } from './auth/auth.slice';
import { reducer } from './rootReducer';
import allSagas from './rootSaga';
import logger from 'redux-logger';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: gDM =>
    gDM({ serializableCheck: false }).concat(logger, sagaMiddleware),
});

sagaMiddleware.run(allSagas);

// export const forceSignOut = () => {
//   store.dispatch(signOut());
// };
