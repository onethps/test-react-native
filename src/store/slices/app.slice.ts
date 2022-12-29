import {createSlice} from '@reduxjs/toolkit';

export type RequestStatusType = 'idle' | 'loading' | 'failed' | 'success';
export type errorType = string | null;

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as errorType,
  networkStatus: true,
};

const {actions, reducer} = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setNetworkStatus(state, {payload}) {
      state.networkStatus = payload;
    },
    setAppStatus(state, {payload}) {
      state.status = payload.status;
    },
    setAppError(state, {payload}) {
      state.error = payload.error;
    },
  },
});

export const appSlice = reducer;
export const {setAppStatus, setAppError, setNetworkStatus} = actions;
