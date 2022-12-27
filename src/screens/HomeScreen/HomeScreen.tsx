import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {validEmail} from '../../utils/validation-utils';

export const HomeScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [error, setError] = React.useState<{email: string; password: string}>({
    email: '',
    password: '',
  });

  const onChangeEmailHandle = (text: string) => {
    setError({password: '', email: ''});
    setEmail(text);
  };

  const onChangePasswordHandle = (text: string) => {
    setError({password: '', email: ''});
    setPassword(text);
  };

  const handleSubmit = () => {
    if (!validEmail.test(email)) {
      setError(prev => {
        return {...prev, email: 'Error'};
      });
      return;
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
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
        {error.email && <Text>Your email is invalid</Text>}
        {error.password && <Text>Your password is invalid</Text>}
      </View>
    </KeyboardAvoidingView>
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