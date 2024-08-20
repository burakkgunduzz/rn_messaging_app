import {useContext} from 'react';
import {AuthenticatedUserContext} from '../context/AuthenticatedUserContext';

export const useUser = () => {
  const context = useContext(AuthenticatedUserContext);

  if (!context) {
    throw new Error(
      'useContext must be used within an AuthenticatedUserProvider',
    );
  }

  const {user, isLoading} = context;
  return {user, isLoading};
};
