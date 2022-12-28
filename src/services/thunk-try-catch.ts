import {AxiosError} from 'axios';
import {handleAxiosError} from './error-notification';

export const thunkTryCatch = async (
  thunkApi: any,
  logic: Function,
  onError?: Function,
) => {
  try {
    return await logic();
  } catch (e: unknown) {
    handleAxiosError(e, thunkApi.dispatch);
    if (e instanceof AxiosError && e.code !== 'ERR_NETWORK') {
      if (onError) {
        await onError();
      }
      return thunkApi.rejectWithValue(e.response?.data.error);
    } else {
      throw e;
    }
  }
};
