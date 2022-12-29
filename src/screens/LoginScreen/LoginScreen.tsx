import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {AppLayout} from '../../components';
import {useLoginUser} from '../../hooks';

//TODO:ADD USER ARRAY

export const LoginScreen = () => {
  const {
    email,
    password,
    error,
    onChangeEmailHandle,
    onChangePasswordHandle,
    handleSubmit,
  } = useLoginUser();

  return (
    <AppLayout>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={onChangeEmailHandle}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={onChangePasswordHandle}
            defaultValue={password}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          {password && email ? (
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={[styles.button, styles.buttonText]}>Login</Text>
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={styles.errorContainer}>
          {error.email && <Text>{error.email}</Text>}
          {error.password && <Text>{error.password}</Text>}
          {error.validate && <Text>{error.validate}</Text>}
        </View>
      </KeyboardAvoidingView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    minHeight: 50,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782f9',
    width: '100%',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
  },
  buttonText: {
    fontWeight: '700',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 5,
  },
  errorContainer: {
    minHeight: 50,
    marginTop: 20,
  },
});
