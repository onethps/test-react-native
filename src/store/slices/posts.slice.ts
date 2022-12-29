import {createSlice} from '@reduxjs/toolkit';
import {ResponsePostType} from '../../types';
import {fetchPosts} from '../middleware';
import {RequestStatusType} from './app.slice';

const initialState = {
  postsData: [] as ResponsePostType[],
  status: 'loading' as RequestStatusType,
};

const {actions, reducer} = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {
    setPostsStatus: (state, {payload}) => {
      state.status === payload;
    },
    setLocaleData: (state, {payload}) => {
      state.postsData = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.fulfilled, (state, {payload}) => {
        state.postsData = payload;
        state.status = 'success';
      })
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const {setPostsStatus, setLocaleData} = actions;
export const postsSlice = reducer;
