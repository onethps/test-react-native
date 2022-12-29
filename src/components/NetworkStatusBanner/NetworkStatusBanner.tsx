import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const NetworkStatusBanner = () => {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  offlineContainer: {
    zIndex: 1,
    backgroundColor: '#b52424',
    height: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  offlineText: {
    color: '#fff',
  },
});
