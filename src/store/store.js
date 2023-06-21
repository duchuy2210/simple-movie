import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import { signOut } from './auth/auth.slice';
import { reducer } from './rootReducer';
import logger from 'redux-logger';
import rootSaga from './rootSaga';
import { signOut } from './auth/authSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: gDM =>
    gDM({
      serializableCheck: false,
    }).concat(logger, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export const forceSignOut = () => {
  store.dispatch(signOut());
};
