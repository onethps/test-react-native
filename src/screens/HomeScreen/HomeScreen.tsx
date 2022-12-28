import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {Card} from '../../components/Card/Card';
import {usePostsData} from '../../hooks/usePostsData';
import {ResponsePostType} from '../../types/types';
import {Snackbar} from 'react-native-paper';

export const HomeScreen = () => {
  const {
    posts,
    refetchPosts,
    cleanFetchPostStatus,
    loadingFetchStatus,
    failedFetchStatus,
  } = usePostsData();

  const renderItem = ({item}: {item: ResponsePostType}) => (
    <View style={styles.sectionContainer}>
      <Card item={item} />
    </View>
  );

  if (loadingFetchStatus) {
    return (
      <SafeAreaView style={styles.preloaderContainer}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <FlatList
        data={posts}
        numColumns={1}
        keyExtractor={({id}) => id.toString()}
        renderItem={renderItem}
      />
      <Snackbar
        visible={failedFetchStatus}
        onDismiss={cleanFetchPostStatus}
        action={{
          label: 'Повторити запит',
          onPress: () => {
            refetchPosts();
          },
        }}>
        Сталась помилка
      </Snackbar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  preloaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    flex: 1,
  },
});
