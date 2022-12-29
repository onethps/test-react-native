import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {Comment, Preloader} from '../../../components';
import {useFetchComments} from '../../../hooks';
import {ResponseCommentType} from '../../../types';

export const CommentList = ({
  postId,
  onCloseModal,
}: {
  postId: null | number;
  onCloseModal: (v: boolean) => void;
}) => {
  const {comments, isFetching, isFetchingError} = useFetchComments(postId);

  useEffect(() => {
    if (isFetchingError) {
      onCloseModal(false);
    }
  }, [isFetchingError, onCloseModal]);

  const renderItem = ({item}: {item: ResponseCommentType}) => (
    <Comment item={item} />
  );

  if (isFetching) {
    return <Preloader />;
  }

  return <FlatList data={comments} renderItem={renderItem} />;
};
