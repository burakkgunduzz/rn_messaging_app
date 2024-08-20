import {createStackNavigator} from '@react-navigation/stack';
import Chat from '../../screens/Chat';
import Home from '../../screens/Home';
const Stack = createStackNavigator();

export function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
