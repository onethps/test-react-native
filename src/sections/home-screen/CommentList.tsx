import React from 'react';
import {FlatList} from 'react-native';
import {Comment} from '../../components/Comment/Comment';
import {Preloader} from '../../components/Preloader/Preloader';
import {useFetchComments} from '../../hooks/useFetchComments';
import {ResponseCommentType} from '../../types/types';

export const CommentList = ({postId}: {postId: null | number}) => {
  const {comments, isFetching} = useFetchComments(postId);

  const renderItem = ({item}: {item: ResponseCommentType}) => (
    <Comment item={item} />
  );

  if (isFetching) {
    return <Preloader />;
  }

  return <FlatList data={comments} renderItem={renderItem} />;
};
