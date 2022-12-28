import {createSlice} from '@reduxjs/toolkit';

export type RequestStatusType = 'idle' | 'loading' | 'failed' | 'success';
export type errorType = string | null;

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as errorType,
};

const {actions, reducer} = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAppStatus(state, {payload}) {
      state.status = payload.status;
    },
    setAppError(state, {payload}) {
      state.error = payload.error;
    },
  },
});

export const appSlice = reducer;
export const {setAppStatus, setAppError} = actions;
