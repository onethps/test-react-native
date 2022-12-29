import React from 'react';
import {users} from '../data/users.data';
import {useAppNavigation} from '../navigation';
import {validEmail} from '../utils';

export const useLoginUser = () => {
  const nav = useAppNavigation();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState<{
    email: string;
    password: string;
    validate: string;
  }>({
    email: '',
    password: '',
    validate: '',
  });

  const onChangeEmailHandle = (text: string) => {
    setError({password: '', email: '', validate: ''});
    setEmail(text);
  };

  const onChangePasswordHandle = (text: string) => {
    setError({password: '', email: '', validate: ''});
    setPassword(text);
  };

  const handleSubmit = () => {
    const isValidUser = users.some(
      u =>
        JSON.stringify(u) ===
        JSON.stringify({
          email: email.toLowerCase(),
          password: password.toLowerCase(),
        }),
    );

    if (!validEmail.test(email)) {
      setError(prev => {
        return {...prev, email: 'Your email is invalid'};
      });
      return;
    }

    if (password.length < 8) {
      setError(prev => {
        return {...prev, password: 'Password must contain over 8 characters'};
      });
      return;
    }

    if (!isValidUser) {
      setError(prev => {
        return {...prev, validate: 'Email or Password Incorrect'};
      });
      return;
    }

    nav.navigate('HomeScreen');
  };

  return {
    email,
    password,
    error,
    onChangeEmailHandle,
    onChangePasswordHandle,
    handleSubmit,
  };
};
