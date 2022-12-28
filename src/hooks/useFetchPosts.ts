import {useAppSelector, useAppDispatch} from '../store/store';
import {fetchPosts} from '../store/middleware/posts';
import {useEffect} from 'react';
import {setPostsStatus} from '../store/slices/posts-slice';
import {setAppError} from '../store/slices/app-slice';

export const usePostsData = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts.postsData);
  const status = useAppSelector(state => state.posts.status);

  const isFetching = status === 'loading';
  const isFetchingFailed = status === 'failed';

  const cleanFetchPostStatus = () => {
    dispatch(setPostsStatus('idle'));
    dispatch(setAppError({error: null}));
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
    isFetching,
    isFetchingFailed,
  };
};
