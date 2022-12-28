import {thunkTryCatch} from './../../services/thunk-try-catch';
import {postsAPI} from './../../services/api/posts';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ResponseCommentType, ResponsePostType} from '../../types/types';

export const fetchPosts = createAsyncThunk<
  ResponsePostType[],
  void,
  {rejectValue: string}
>('posts/fetchPosts', async (_, thunkApi) => {
  return thunkTryCatch(thunkApi, async () => {
    const res = await postsAPI.getPosts();
    return res.data;
  });
});

export const fetchComments = createAsyncThunk<
  ResponseCommentType[],
  {id: number},
  {rejectValue: string}
>('posts/fetchPost', async ({id}, thunkApi) => {
  return thunkTryCatch(thunkApi, async () => {
    const res = await postsAPI.getComments(id);
    return res.data;
  });
});
