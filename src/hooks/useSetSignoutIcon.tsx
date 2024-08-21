import {useLayoutEffect} from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {signOut} from 'firebase/auth';
import {auth} from '../config/firebase';
const logoutIcon = require('../../assets/logout.png');

export const useSetSignoutIcon = () => {
  const navigation = useNavigation();

  const onSignOut = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.signoutIcon} onPress={onSignOut}>
          <Image source={logoutIcon} style={styles.signoutIcon} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
};

const styles = StyleSheet.create({
  signoutIcon: {
    marginRight: 10,
    width: 23,
    height: 24,
  },
});
