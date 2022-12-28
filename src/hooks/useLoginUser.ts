import {validEmail} from './../utils/validation-utils';
import React from 'react';
import {useAppNavigation} from '../navigation/types';
export const useLoginUser = () => {
  const nav = useAppNavigation();

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
