import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {Post} from '../../components/Post/Post';
import {Preloader} from '../../components/Preloader/Preloader';
import {ResponsePostType} from '../../types/types';

interface PostListProps {
  posts: ResponsePostType[];
  isFetching: boolean;
}

export const PostList: FC<PostListProps> = ({posts, isFetching}) => {
  const renderItem = ({item}: {item: ResponsePostType}) => <Post item={item} />;

  if (isFetching) {
    return <Preloader />;
  }
  return (
    <FlatList
      data={posts}
      numColumns={1}
      keyExtractor={({id}) => id.toString()}
      renderItem={renderItem}
    />
  );
};
