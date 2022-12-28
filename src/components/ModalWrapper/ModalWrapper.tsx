import React, {FC, ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';

interface ModalWrapperProps {
  onClose: (v: boolean) => void;
  open: boolean;
  children: ReactElement;
}

export const ModalWrapper: FC<ModalWrapperProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <Modal
      isVisible={open}
      customBackdrop={
        <View
          style={styles.backDropContainer}
          onTouchEnd={() => onClose(false)}
        />
      }
      onBackdropPress={() => onClose(false)}>
      <View style={styles.modalContainer}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backDropContainer: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  modalContainer: {
    flex: 0.5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
});
