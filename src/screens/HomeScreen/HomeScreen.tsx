import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {usePostsData} from '../../hooks/useFetchPosts';
import {Snackbar} from 'react-native-paper';
import {useAppSelector} from '../../store/store';
import {PostList} from '../../sections/home-screen/PostList';

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

  return (
    <SafeAreaView style={styles.container}>
      <PostList posts={posts} isFetching={isFetching} />
      <Snackbar
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
