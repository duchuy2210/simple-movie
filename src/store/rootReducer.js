import { combineReducers } from 'redux';
import authReducer from './auth/authSlice';

export const reducer = combineReducers({
  auth: authReducer,
});

export default reducer;
