import {RequestStatusType} from './app-slice';
import {fetchComments} from '../middleware/posts';
import {ResponseCommentType} from '../../types/types';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  commentsData: [] as ResponseCommentType[],
  status: 'loading' as RequestStatusType,
};

const {actions, reducer} = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {
    setCommentsStatus: (state, {payload}) => {
      state.status === payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchComments.fulfilled, (state, {payload}) => {
        state.commentsData = payload;
        state.status = 'success';
      })
      .addCase(fetchComments.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchComments.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const {setCommentsStatus} = actions;
export const commentsSlice = reducer;
