import {thunkTryCatch} from './../../services/thunk-try-catch';
import {postsAPI} from './../../services/api/posts';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ResponsePostType} from '../../types/types';

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
