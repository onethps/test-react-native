import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ResponseCommentType} from '../../types/types';

export const Comment = ({item}: {item: ResponseCommentType}) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.email}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 10,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 10,
  },
  body: {
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    marginVertical: 10,
  },
});
