import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {Post} from '../../../components';
import {ResponsePostType} from '../../../types';

interface PostListProps {
  posts: ResponsePostType[];
}

export const PostList: FC<PostListProps> = ({posts}) => {
  const renderItem = ({item}: {item: ResponsePostType}) => <Post item={item} />;

  return (
    <FlatList
      data={posts}
      numColumns={1}
      keyExtractor={({id}) => id.toString()}
      renderItem={renderItem}
    />
  );
};
