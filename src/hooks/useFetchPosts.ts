import {readFile} from './../utils/file.utils';
import {useEffect} from 'react';
import {fetchPosts} from '../store/middleware';
import {setPostsStatus, setAppError, setLocaleData} from '../store/slices';
import {useAppDispatch, useAppSelector} from '../store/store';

export const usePostsData = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts.postsData);
  const status = useAppSelector(state => state.posts.status);
  const networkStatus = useAppSelector(state => state.app.networkStatus);

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

  useEffect(() => {
    const readingStorageData = async () => {
      const data = await readFile();
      dispatch(setLocaleData(data));
    };

    if (networkStatus === false) {
      readingStorageData();
      return;
    }
  }, [networkStatus, dispatch]);

  return {
    posts,
    status,
    refetchPosts,
    cleanFetchPostStatus,
    isFetching,
    isFetchingFailed,
  };
};
