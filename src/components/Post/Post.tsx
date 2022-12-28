import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CommentList} from '../../sections/home-screen/CommentList';
import {ResponsePostType} from '../../types/types';
import {ModalWrapper} from '../ModalWrapper/ModalWrapper';

export const Post = ({item}: {item: ResponsePostType}) => {
  const [openModal, onCloseModal] = useState(false);
  const [postId, setPostId] = useState<null | number>(null);

  const onPressHandle = () => {
    setPostId(item.id);
    onCloseModal(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressHandle} style={styles.wrapper}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </View>
      </TouchableOpacity>
      <ModalWrapper open={openModal} onClose={onCloseModal}>
        <CommentList postId={postId} />
      </ModalWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    padding: 5,
  },
  textContainer: {
    backgroundColor: 'white',
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
