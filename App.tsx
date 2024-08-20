import React from 'react';
import {RootNavigator} from './src/navigation/RootNavigator';
import {useAuthListener} from './src/hooks/useAuthListener';

export default function App(): React.JSX.Element {
  useAuthListener();

  return <RootNavigator />;
}
