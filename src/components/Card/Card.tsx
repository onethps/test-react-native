import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ResponsePostType} from '../../types/types';

export const Card = ({item}: {item: ResponsePostType}) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('press')}
      style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  textContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  title: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
    marginVertical: 10,
  },
  body: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 10,
  },
});
