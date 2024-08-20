import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {Alert} from 'react-native';
import {auth} from '../config/firebase';

type Credentials = {
  email: string;
  password: string;
};

export const handleSignup = ({email, password}: Credentials) => {
  if (email && password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => console.log('Signup success'))
      .catch(err => Alert.alert('Login error', err.message));
  }
};

export const handleLogin = ({email, password}: Credentials) => {
  if (email && password) {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log('Login success'))
      .catch(err => Alert.alert('Login error', err.message));
  }
};
