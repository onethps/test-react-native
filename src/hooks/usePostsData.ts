import {useAppSelector, useAppDispatch} from './../store/store';
import {fetchPosts} from '../store/middleware/posts';
import {useEffect} from 'react';

export const usePostsData = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts.posts);
  const status = useAppSelector(state => state.posts.status);
  const isLoadingStatus = status === 'loading';

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return {posts, isLoadingStatus};
};
