import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import { signOut } from './auth/auth.slice';
import { reducer } from './rootReducer';
import logger from 'redux-logger';
import rootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: gDM =>
    gDM({ serializableCheck: false }).concat(logger, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// export const forceSignOut = () => {
//   store.dispatch(signOut());
// };
