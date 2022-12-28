import {RequestStatusType} from './app-slice';
import {fetchPosts} from './../middleware/posts';
import {ResponsePostType} from './../../types/types';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  posts: [] as ResponsePostType[],
  status: 'idle' as RequestStatusType,
};

const {actions, reducer} = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.fulfilled, (state, {payload}) => {
        state.posts = payload;
      })
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const postsSlice = reducer;
