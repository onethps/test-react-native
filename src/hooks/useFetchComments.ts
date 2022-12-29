import {useEffect} from 'react';
import {fetchComments} from '../store/middleware';

import {useAppDispatch, useAppSelector} from '../store/store';

export const useFetchComments = (id: number | null) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector(state => state.comments.commentsData);
  const status = useAppSelector(state => state.comments.status);
  const isFetching = status === 'loading';
  const isFetchingError = status === 'failed';

  useEffect(() => {
    if (id) {
      dispatch(fetchComments({id}));
    }
  }, [dispatch, id]);

  return {comments, isFetching, isFetchingError};
};
