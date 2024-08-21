import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import colors from '../constants/colors';
import {useCustomNavigation} from '../hooks/useNavigation';
import {useSetSignoutIcon} from '../hooks/useSetSignoutIcon';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
const helloIcon = require('../../assets/hand.png');

const Home = () => {
  const navigation = useCustomNavigation();
  const {user} = useSelector((state: RootState) => state.auth);
  useSetSignoutIcon();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomingText}>
        Hello <Image source={helloIcon} style={styles.hand} />
        {'\n'} {user!.email}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat')}
        style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Go To Chat Channel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  welcomingText: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 'auto',
  },
  chatButton: {
    backgroundColor: colors.primary,
    height: 48,
    width: '80%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    margin: 'auto',
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginBottom: 50,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  hand: {
    width: 24,
    height: 24,
  },
});
