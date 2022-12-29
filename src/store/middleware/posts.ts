import {createAsyncThunk} from '@reduxjs/toolkit';
import {thunkTryCatch} from '../../services';
import {postsAPI} from '../../services/api';
import {ResponseCommentType, ResponsePostType} from '../../types';
import {writeFile} from '../../utils';

export const fetchPosts = createAsyncThunk<
  ResponsePostType[],
  void,
  {rejectValue: string}
>('posts/fetchPosts', async (_, thunkApi) => {
  return thunkTryCatch(thunkApi, async () => {
    const res = await postsAPI.getPosts();
    writeFile(res.data);
    return res.data;
  });
});

export const fetchComments = createAsyncThunk<
  ResponseCommentType[],
  {id: number},
  {rejectValue: string}
>('posts/fetchComments', async ({id}, thunkApi) => {
  return thunkTryCatch(thunkApi, async () => {
    const res = await postsAPI.getComments(id);
    return res.data;
  });
});
