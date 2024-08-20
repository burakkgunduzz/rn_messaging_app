import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {handleSignup} from '../utils/auth';
import {SwitchAuthPage} from '../components/SwitchAuthPage';
import {CredentialsInputs} from '../components/CredentialsInputs';
import colors from '../constants/colors';
import {useCustomNavigation} from '../hooks/useNavigation';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useCustomNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Sign Up</Text>
        <CredentialsInputs
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <TouchableOpacity
          disabled={!email && !password}
          style={styles.button}
          onPress={() => handleSignup({email, password})}>
          <Text style={styles.submitButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <SwitchAuthPage
          descriptiveText="Have an account?"
          buttonText="Log In"
          onPress={() => navigation.navigate('Login')}
        />
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.primary,
    alignSelf: 'center',
    paddingBottom: 24,
  },
  submitButtonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: colors.primary,
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
