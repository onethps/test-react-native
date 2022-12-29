import {createSlice} from '@reduxjs/toolkit';
import {ResponseCommentType} from '../../types';
import {fetchComments} from '../middleware';
import {RequestStatusType} from './app.slice';

const initialState = {
  commentsData: [] as ResponseCommentType[],
  status: 'loading' as RequestStatusType,
};

const {actions, reducer} = createSlice({
  name: 'commentsSlice',
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
        state.commentsData = [];
      });
  },
});

export const {setCommentsStatus} = actions;
export const commentsSlice = reducer;
