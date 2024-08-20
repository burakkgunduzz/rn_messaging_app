import {createContext, useState, useEffect} from 'react';
import {auth} from '../config/firebase';
import {onAuthStateChanged} from 'firebase/auth';
import {User} from 'firebase/auth';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
}

export const AuthenticatedUserContext = createContext<
  AuthContextType | undefined
>(undefined);

export const AuthenticatedUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      },
    );
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);

  return (
    <AuthenticatedUserContext.Provider value={{user, isLoading}}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
