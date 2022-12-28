import {RequestStatusType} from './app-slice';
import {fetchPosts} from '../middleware/posts';
import {ResponsePostType} from '../../types/types';
import {createSlice} from '@reduxjs/toolkit';

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

export const {setPostsStatus} = actions;
export const postsSlice = reducer;
