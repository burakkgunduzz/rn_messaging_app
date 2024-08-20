import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {onAuthStateChanged, User} from 'firebase/auth';
import {auth} from '../config/firebase';
import {setUser, setIsLoading} from '../store/authSlice';

export const useAuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      (authenticatedUser: User | null) => {
        dispatch(setUser(authenticatedUser));
        dispatch(setIsLoading(false));
      },
    );

    return unsubscribeAuth;
  }, [dispatch]);
};
