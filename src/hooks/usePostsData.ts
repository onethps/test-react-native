import {useAppSelector, useAppDispatch} from './../store/store';
import {fetchPosts} from '../store/middleware/posts';
import {useEffect} from 'react';
import {setPostsStatus} from '../store/slices/posts-slice';

export const usePostsData = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts.posts);
  const status = useAppSelector(state => state.posts.status);

  const loadingFetchStatus = status === 'loading';
  const failedFetchStatus = status === 'failed';

  const cleanFetchPostStatus = () => {
    dispatch(setPostsStatus('idle'));
  };

  const refetchPosts = () => {
    dispatch(fetchPosts());
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return {
    posts,
    status,
    refetchPosts,
    cleanFetchPostStatus,
    loadingFetchStatus,
    failedFetchStatus,
  };
};
