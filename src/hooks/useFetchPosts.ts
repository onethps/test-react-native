import {useEffect} from 'react';
import {Dirs, FileSystem} from 'react-native-file-access';
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
    const fetchingLocalData = async () => {
      const patch = Dirs.CacheDir + '/posts.json';
      const data = await FileSystem.readFile(patch);
      dispatch(setLocaleData(JSON.parse(data)));
    };

    if (networkStatus === false) {
      fetchingLocalData();
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
