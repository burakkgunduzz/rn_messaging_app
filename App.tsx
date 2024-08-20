import React from 'react';
import {RootNavigator} from './src/navigation/RootNavigator';
import {AuthenticatedUserProvider} from './src/context/AuthenticatedUserContext';

export default function App(): React.JSX.Element {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
