import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

export const Preloader = () => {
  return (
    <SafeAreaView style={styles.preloaderContainer}>
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  preloaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
