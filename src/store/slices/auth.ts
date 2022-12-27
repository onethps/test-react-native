import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  images: [],
  image: null,
};

const {actions, reducer} = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
});

export const authSlice = reducer;