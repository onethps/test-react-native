import {AxiosError} from 'axios';
import {Dispatch} from '@reduxjs/toolkit';
import {setAppError, setAppStatus} from '../store/slices/app-slice';

export const handleAxiosError = (error: unknown, dispatch: Dispatch) => {
  if (error instanceof AxiosError) {
    if (error.code === 'ERR_NETWORK') {
      handleServerNetworkError(error, dispatch);
      return;
    }
    handleServerAppError(error.response?.data, dispatch);
  }
  dispatch(setAppStatus({status: 'idle'}));
};

export const handleServerAppError = (
  data: {error: string},
  dispatch: Dispatch,
) => {
  if (!data.error) {
    dispatch(
      setAppError({
        error: 'Server returns error: ' + JSON.stringify(data),
      }),
    );
    return;
  }

  dispatch(setAppError({error: data.error}));
};

export const handleServerNetworkError = (
  error: {message: string},
  dispatch: Dispatch,
) => dispatch(setAppError({error: error.message}));
