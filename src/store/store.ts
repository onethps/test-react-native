import {authSlice} from './slices/auth';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const rootReducer = combineReducers({
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
