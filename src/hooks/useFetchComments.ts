import {fetchComments} from './../store/middleware/posts';
import {useAppSelector} from './../store/store';
import {useEffect} from 'react';

import {useAppDispatch} from '../store/store';

export const useFetchComments = (id: number | null) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector(state => state.comments.commentsData);
  const status = useAppSelector(state => state.comments.status);
  const isFetching = status === 'loading';

  useEffect(() => {
    if (id) {
      dispatch(fetchComments({id}));
    }
  }, [dispatch, id]);

  return {comments, isFetching};
};
