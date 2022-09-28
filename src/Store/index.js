import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from '../Reducer/AuthReducer';
import logger from 'redux-logger';
export const store = configureStore({
  reducer: {
    authReducer: AuthReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
