import React from 'react';

import {Snackbar} from 'react-native-paper';
import {AppLayout, Preloader} from '../../components';
import {usePostsData} from '../../hooks';

import {useAppSelector} from '../../store/store';
import {PostList} from './sections';

export const HomeScreen = () => {
  const {
    posts,
    refetchPosts,
    cleanFetchPostStatus,
    isFetching,
    isFetchingFailed,
  } = usePostsData();

  const errorAppMessage = useAppSelector(state => state.app.error);
  const snackBarMessage = isFetchingFailed
    ? 'Сталась помилка'
    : errorAppMessage;

  if (isFetching) {
    return <Preloader />;
  }

  return (
    <AppLayout>
      <>
        <PostList posts={posts} />
        <Snackbar
          duration={6000}
          visible={!!errorAppMessage}
          onDismiss={cleanFetchPostStatus}
          action={{
            label: 'Повторити запит',
            onPress: () => {
              refetchPosts();
            },
          }}>
          {snackBarMessage}
        </Snackbar>
      </>
    </AppLayout>
  );
};
