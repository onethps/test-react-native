import React, {useEffect} from 'react';
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

export const HomeScreen = () => {
  const {isLoadingStatus, posts} = usePostsData();

  const renderItem = ({item}: {item: ResponsePostType}) => (
    <View style={styles.sectionContainer}>
      <Card item={item} />
    </View>
  );

  if (isLoadingStatus) {
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
