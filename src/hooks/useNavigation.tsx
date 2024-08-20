import {useNavigation, NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Chat: undefined;
  Login: undefined;
  Signup: undefined;
};

type ChatScreenNavigationProp = NavigationProp<RootStackParamList>;

export const useCustomNavigation = () => {
  const navigation = useNavigation<ChatScreenNavigationProp>();
  return navigation;
};
